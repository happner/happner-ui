# happner-ui
*a happner project*

*how to install*
```bash
git clone https://github.com/happner/happner-angular.git && cd happner-angular
npm install
bower install
gulp build
node server
```
then navigate to http://localhost:60606

*how to test*
```bash
git clone https://github.com/happner/happner-angular.git && cd happner-angular
npm install
bower install
gulp build
npm test
```

#understanding schemas
*system uses JSON schemas to define an object model, there are 2 types of schema:*
1. the object schema - describes the actual data structure and properties of the the type/object
2. the app_schema - describes how the object must be displayed in the user interface

#server side components

## entry point
* ./server.js in root folder *

##service manager
* called by the entry point, performs the following high level steps: *

1. starts up the happner instance from the config file ./config.js

2. starts the controller manager found in ./controllers/controller_manager.js

##controller manager
*starts up controller services, that listen to changes on specific schema names, controllers live in folders with the convention of being named the same name as the schema they are listening for*

###key points about controllers

1. you dont need a controller to save/update/delete data, this is automatically handled by the framework.
2. if you need a background task to do something with objects of a specific schema, you set up a controller.
3. controllers are typically used for long-running background asynchronous tasks

#client side components

*the client side of the system is served from ./middleware/static/, the angular app can be found in ./middleware/static/angular, teh entry point is ./middleware/static/index.html*

##happner-angular service

*gives you access to the mesh, and the underlying happn data instance, can be found here: ./middleware/static/angular/services/happner-angular *

##system/utility controllers

1. ./middleware/static/angular/controllers/dashboard-controllers - manage the dashboard ui
2. ./middleware/static/angular/controllers/happner-controllers - do utility UI stuff, notifications/modal forms etc.
3. ./middleware/static/angular/controllers/sidebar-controllers - manage the sidebar

##data controllers


1. data-controllers - so manage data items, search/edit views
2. data-schema-controllers - manage the display of the data / drives the ui

##angular-json-editor

*wrapper for the https://github.com/jdorn/json-editor*

##TASKS
1. Upgrade to angular 2, or check what the cost will be of upgrading
2. unable to save schemas or app_schemas from UI
3. fix deep-linking issues
4. Customer publicKey not being displayed on edit