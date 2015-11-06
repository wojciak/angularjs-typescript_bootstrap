/*Core*/
import {vendor} from './core/vendor';
import {Module} from './core/Module';

/*Components*/
import {home} from './components/home/home';

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

class App extends Module {
    constructor() {
        super('app', ['ngNewRouter', 'app.home'], AppController);
    }
}

var app = new App();

export {app};
