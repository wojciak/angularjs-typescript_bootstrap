/*Core*/
import {Component} from '../../core/Component';

/*Enums*/
import {Components} from '../../Components';
import {Modules} from '../../Modules';

/*Controllers*/
import {SampleComponentController} from './SampleComponentController';

/*Templates*/

class SampleComponent extends Component {
    template = 'components/sampleComponent/sampleComponentTemplate.html';
    bindings = {};

    constructor() {
        super(Modules[Modules.app], Components[Components.sampleComponent], SampleComponentController);
    }
}

var sampleComponent = new SampleComponent();

export {sampleComponent}
