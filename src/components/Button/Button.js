import { Component } from '../../core/Component';
import './Button.scss';

const DEFAULT_TYPE = 'button';

export class Button extends Component {
    constructor(options = {}) {
        const {
            type = DEFAULT_TYPE,
            className,
            children,
            onClick,
            listeners,
            ...other
        } = options;

        super({
            tagName: 'button',
            className: `button`,
            attrs: { type, ...other },
            listeners: { listeners },
            children
        });
    }
}
