var angular = require('angular');

class Component {
    component:angular.IModule;
    template:string = '';
    bindings:{} = {};

    constructor(module:string, component:string, Controller:any) {
        this.createComponent(module, component, Controller);
    };

    createComponent(module:string, component:string, Controller:any) {
        this.component = angular
            .module(module)
            .directive(component, () => {
                return {
                    templateUrl: this.template,
                    controller: Controller,
                    controllerAs: component,
                    scope: {},
                    bindToController: this.bindings
                }
            });
    }
}

export {Component};
