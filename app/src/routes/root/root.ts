/*Core*/
import {Module} from '../../core/Module';
import {Component} from '../../core/Component';

/*Enums*/
import {Components} from '../../Components';
import {Modules} from '../../Modules';

class RootController {
    static $inject:string[] = [];
}

class Root extends Module {
    constructor() {
        super(Modules[Modules.appRouteRoot],
            [
                'ui.router'
            ],
            RootController);
    }

    configuration($stateProvider:angular.ui.IStateProvider, $urlRouterProvider:angular.ui.IUrlRouterProvider) {
        $urlRouterProvider
            .otherwise('/');

        $stateProvider
            .state('root', {
                url: '/',
                views: {
                    header: {
                        templateUrl: 'routes/root/header.html'
                    },
                    sidebar: {
                        templateUrl: 'routes/root/sidebar.html'
                    },
                    content: {
                        templateUrl: 'routes/root/content.html'
                    },
                    footer: {
                        templateUrl: 'routes/root/footer.html'
                    }
                }
            });
    }
}

var root = new Root();

export {root}
