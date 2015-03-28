var App = {

    create:function(container_id, controllers){
        var newApp               = Object.create(this);
        newApp.container_id      = container_id || 'container';
        newApp.container         = $('#'+newApp.container_id);
        newApp.Controllers       = controllers || {};
        newApp.CurrentController = null;
        newApp.Router            = Router.create();
        newApp.controllerAdded   = Pubsub.create(this);
        newApp.controllerRemoved = Pubsub.create(this);
        newApp.controllerChanged = Pubsub.create(this);
        return newApp;
    },

    init: function(route){
        var _this = this;
        var route = route || this.Router.getRouteByHash();

        // add default paths
        this.addController('/404', Controller._404);

        // setup router
        this.Router.routeChanged.sub(function(e){ _this.load(e.route); });
        this.Router.watch();

        // load default path
        this.load(route);
    },

    load: function(route){
        this.setCurrentController(this.getController(route));
        this.getCurrentController()(this.container);
    },

    getControllers: function() {
        return this.Controllers;
    },

    getController: function(route){
        return this.Controllers[route];
    },

    addController: function(route, controller) {

        // keep router paths and app paths in sync
        this.Router.addRoute(route);
        this.Controllers[route] = controller;
        this.controllerAdded.pub({ controller: controller });
        return this;
    },

    removeController: function(route) {
        var deleted_controller;
        deleted_controller = this.Controllers[route];
        delete this.Controllers[route];
        this.controllerRemoved.pub({ controller: deleted_controller });
        if (route === this.CurrentRoute) { this.setCurrentRoute(null); }
        return this;
    },

    getCurrentController: function() {
        return this.CurrentController;
    },
    
    setCurrentController: function(controller) {
        this.CurrentController = controller;
        return this;
    },

};
