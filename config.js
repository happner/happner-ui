
/***********************************************************
 default to the test .env file to load environment variables
 ***********************************************************/

if (!process.env.EDGE_NODE_ENV || process.env.EDGE_NODE_ENV == 'TEST') require('dotenv').config({path: './test/.env-test'});

module.exports = {
  name: 'edgeMesh',
  dataLayer: {
    port: process.env.MASTER_PORT,
    persist: true,
    secure: true,
    adminPassword: process.env.ADMIN_PASSWORD,
    log_level: 'info|error|warning',
    filename: __dirname + '/db/happner-angular.nedb',
    middleware: {
      security: {
        exclusions: [
          "/*",
          "/css/*",
          "/js/*",
          "/fonts/*",
          "/angular/*",
          "/bower_components/*",
          "/node_modules/*",
          "/img/*",
          "/icons/*",
          "/favicon.ico"
        ]
      }
    }
  },
  modules: {
    www: {
      path: __dirname + '/middleware/www.js'
    }
  },
  components: {
    www: {
      moduleName: "www",
      web: {
        routes: {
          "static": ["static"]
        }
      }
    }
  },
  endpoints:{}
};