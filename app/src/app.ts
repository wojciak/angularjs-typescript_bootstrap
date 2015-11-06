/*Core*/
import {vendor} from './core/vendor';
import {Module} from './core/Module';
import {Component} from './core/Component';

/*Enums*/
import {Components} from './Components';
import {Modules} from './Modules';

/*Components*/
import {sampleComponent} from './components/sampleComponent/sampleComponent';

class AppController {
    static $inject:string[] = [];
}

class App extends Module {
    constructor() {
        super(Modules[Modules.app], [], AppController);
    }
}

var app = new App();

export {app}
