var angular = require('angular');

class App {
    module:angular.IModule;

    constructor() {
        this.createModule();
        this.loadConfiguration();
        this.loadRuntime();
        this.loadControllers();
    };

    createModule() {
        this.module = angular.module('app', []);
    }

    loadRuntime() {
        this.module.run(() => {
            console.log('run');
        });
    }

    loadConfiguration() {
        this.module.config(() => {
            console.log('config');
        });
    }

    loadControllers() {
        this.module.controller('AppController', function ApPController() {
            console.log('controller');
        });
    }
}

var app = new App();

export {app};
