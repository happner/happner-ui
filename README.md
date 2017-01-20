# happner-ui
*a happner project which serves static resources running on Angular2 framework*

*how to install*
```bash
git clone https://github.com/happner/happner-ui.git
npm install
bower install
gulp build
npm start-happner
```
then navigate to http://localhost:60606


#angular2
*ui runs on the angular2 platform which in turn is written in typescript*
*the npm command also starts up the typescript compiler hence any changes to the ts files are deployed instantly to the server root folder

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

*the client side of the system is served from ./middleware/static/, the angular app can be found in ./middleware/static/app, the entry point is ./middleware/static/index.html*

