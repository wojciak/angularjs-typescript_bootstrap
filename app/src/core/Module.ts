var angular = require('angular');

class Module {
    module:angular.IModule;

    constructor(name:string, dependencies:string[], Controller:any) {
        this.createModule(name, dependencies);
        this.loadConfiguration();
        this.loadRuntime();
        this.loadControllers(Controller);
    };

    runtime() {
    }

    configuration() {
    }

    createModule(name:string, dependencies:string[]) {
        this.module = angular.module(name, dependencies);
    }

    loadRuntime() {
        this.module.run(this.runtime);
    }

    loadConfiguration() {
        this.module.config(this.configuration);
    }

    loadControllers(Controller:any) {
        this.module.controller(Controller.toString().match(/(?!^)\b\w+/)[0], Controller);
    }
}

export {Module};
