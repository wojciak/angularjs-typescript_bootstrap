/*Core*/
import {Module} from '../../core/Module';

class HomeController {
    static $inject = ['$router'];

    constructor($router:any) {
        $router.config([]);
    }
}

class Home extends Module {
    constructor() {
        super('app.home', ['ngNewRouter'], HomeController);
    };
}

var home = new Home();

export {home};
