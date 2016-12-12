/**
 * Created by grant on 2016/09/12.
 */

var Happner = require('happner-2');
var Controllers = require('../controllers/controller_manager');

function ServiceManager() {
    this.__mesh = null;
    this.__controllers = null;
}

ServiceManager.prototype.__startHappner = function (config, callback) {

    var self = this;

    if (config.happn.port) config.happn.port = parseInt(config.happn.port);


    Happner.create(config, function (err, mesh) {

        if (err) {
            console.log(':: Error starting Happner: ' + err);
            callback(err);
        }

        mesh._mesh.data.get('/system-events', function(e, result){

            if (e) return console.log('failed logging restarts', e);

            if (!result) result = {restarts:0};

            result.uptime = Date.now();
            result.restarts += 1;

            mesh._mesh.data.set('/system-events', result);

        });

        self.__mesh = mesh;

        self.__mesh.on('mesh-log', function (data) {
            console.log('mesh log data:::', data);
            self.__mesh.data.set('/system-log/' + Date.now(), data);
        });

        self.__controllers = new Controllers();

        if (!config.controllers) config.controllers = {};

        if (!config.controllers.initOrder) config.controllers.initOrder = ['schema','app_schema','customer','group','user'];

        self.__controllers.initialize(self.__mesh, config.controllers, callback);
    });
};

ServiceManager.prototype.__stopHappner = function (config, callback) {
    var self = this;

    self.__controllers.stop(function(e){

        if (e) self.__mesh.log.error('failed stopping controllers', e);

        self.__mesh.stop({
            kill: false, wait: 10000, exitCode: 1, reconnect: true
        }, function (data) {
            console.log('::: Mesh stopped....');
            callback();
        });
    });
};

ServiceManager.prototype.start = function (config, callback) {

    var self = this;

    console.log('starting mesh:::', config);

    self.__startHappner(config, function (err, result) {
        if (err)
            return callback(err);

        self.__mesh.log.info('::: Mesh started....');
    });
};

ServiceManager.prototype.stop = function (config, callback) {
    return this.__stopHappner(config, callback);
};

module.exports = ServiceManager;