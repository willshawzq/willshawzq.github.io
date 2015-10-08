require.config({
    paths: {
        "jQuery": "//cdn.bootcss.com/jquery/2.1.4/jquery.min",
        "underscore": "//cdn.bootcss.com/underscore.js/1.8.3/underscore-min",
        "backbone": "//cdn.bootcss.com/backbone.js/1.2.3/backbone-min",
        "text": "//cdn.bootcss.com/require-text/2.0.12/text.min"
    },
    shim: {
        "underscore": {
            exports: "_"
        },
        "backbone": {
            deps: ["underscore", "jQuery"],
            exports: "Backbone"
        }
    }
});
require([
    "backbone",
    "views/app",
    "routers/router"
], function(Backbone, AppView, WorkSpace) {
    new WorkSpace();
    Backbone.history.start();

    var appView = new AppView();
    console.log(appView);
});