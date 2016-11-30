/**
 * Created by grant on 2016/08/29.
 */

var ServiceManager = require('./services/service_manager');
var config = require('./config.js');
var app = new ServiceManager();
var __started = false;

var terminate = function (code) {

  console.log('::: Terminating service...');
  console.log('::: Running termination tasks, 1 minute deadline...');

  setTimeout(function () {
    console.warn('::: Tasks not finishing in time, forcing close!');
    process.exit(0);
  }, 60000);

  if (__started) {
    app.stop(function (e) {

      if (e) {
        console.log('::: Error stopping services: ' + e);
        process.exit(1);
      }
      process.exit(0);
    });

  } else process.exit(0);
};

app.start(config, function (e) {
  if (e) {
    terminate(1);
  } else {
    __started = true;
  }
});

process.on('SIGTERM', function (code) {
  return terminate(code);
});

process.on('SIGINT', function (code) {
  return terminate(code);
});
