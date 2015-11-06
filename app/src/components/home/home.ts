var angular = require('angular'),
    ngNewRouter = require('angular-new-router');

class Home {
    module:angular.IModule;

    constructor() {
        this.createModule();
        this.loadConfiguration();
        this.loadRuntime();
        this.loadControllers();
    };

    createModule() {
        this.module = angular.module('app.home', ['ngNewRouter']);
    }

    loadRuntime() {
        this.module.run(() => {
            console.log('run home');
        });
    }

    loadConfiguration() {
        this.module.config(() => {
            console.log('config home');
        });
    }

    loadControllers() {
        this.module.controller('HomeController', HomeController);
    }
}

class HomeController {
    static $inject = ['$router'];

    constructor($router:any) {
        $router.config([]);
    }
}

var home = new Home();

export {home};
