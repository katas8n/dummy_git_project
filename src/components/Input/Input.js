import { Component } from '../../core/Component';
import './Input.scss';

export class Input extends Component {
    constructor() {
        super({
            tagName: 'input',
            className: 'input '
        });
    }
}
