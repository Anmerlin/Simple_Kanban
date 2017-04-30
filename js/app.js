angular.module("simplyKanban", ["ngRoute", "angular-sortable-view"]);

(function ()
{
  var APP_ID = "83F64184-A6DF-B6C7-FF03-89A7B2B7FC00";
  var JS_SECRET_KEY = "0B9ACD4A-5BD3-78F1-FF22-A4A78275DD00";
  var APP_VERSION = 'v1';

  Backendless.initApp(APP_ID, JS_SECRET_KEY, APP_VERSION);
})