//included this path config directly in the require js file config function
/*require.config({
  baseUrl: 'js',
  paths: {
    jquery: 'libs/jquery',
    underscore: 'libs/underscore',
    backbone: 'libs/backbone',
  }

});*/
define(['config'], function () {
    require(['router'], function(Router) {
        var router = new Router();
        Backbone.history.start();
    });
});