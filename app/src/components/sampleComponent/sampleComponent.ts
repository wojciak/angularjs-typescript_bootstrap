/*Core*/
import {Component} from '../../core/Component';

/*Enums*/
import {Components} from '../../Components';
import {Modules} from '../../Modules';

/*Controllers*/
import {SampleComponentController} from './SampleComponentController';

/*Templates*/
import {sampleComponentTemplate} from './sampleComponentTemplate';

class SampleComponent extends Component {
    template = sampleComponentTemplate;
    bindings = {};

    constructor() {
        super(Modules[Modules.app], Components[Components.sampleComponent], SampleComponentController);
    }
}

var sampleComponent = new SampleComponent();

export {sampleComponent}
