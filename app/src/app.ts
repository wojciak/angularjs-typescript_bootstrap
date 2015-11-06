var angular = require('angular'),
    ngNewRouter = require('angular-new-router');

import {home} from './components/home/home';

class App {
    module:angular.IModule;

    constructor() {
        this.createModule();
        this.loadConfiguration();
        this.loadRuntime();
        this.loadControllers();
    };

    createModule() {
        this.module = angular.module('app', ['ngNewRouter', 'app.home']);
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
        this.module.controller('AppController', AppController);
    }
}

class AppController {
    static $inject = ['$router'];

    constructor($router:any) {
        $router.config([
            {
                path: '/',
                components: {
                    main: 'home'
                }
            }
        ]);
    }
}

var app = new App();

export {app};
