/*Core*/
import {vendor} from './core/vendor';
import {Module} from './core/Module';
import {Component} from './core/Component';

/*Enums*/
import {Components} from './Components';
import {Modules} from './Modules';

/*Components*/
import {sampleComponent} from './components/sampleComponent/sampleComponent';

/*Routes*/
import {root} from './routes/root/root';

class AppController {
    static $inject:string[] = [];
}

class App extends Module {
    constructor() {
        super(Modules[Modules.app],
            [
                'ui.router',
                Modules[Modules.appRouteRoot]
            ],
            AppController);
    }
}

var app = new App();

export {app}
