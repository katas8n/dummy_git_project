import { Component } from '../../core/Component';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';

import './Header.scss';

export class Header extends Component {
    constructor() {
        super({
            tagName: 'header',
            className: 'header',
            children: [
                new Input(),
                new Button({
                    children: [`Log in`],
                    class: ['button'].join(' ')
                })
            ],
            listeners: {
                click: e => this.onClickHandler(e),
                change: e => this.onChangeHandler(e)
            }
        });
    }
    onChangeHandler(e) {
        const currentValue = e.target.value;
        console.log(currentValue);
    }

    onClickHandler(e) {
        const currentElement = e.target;
        const isButton = currentElement.classList.contains('button');

        if (isButton) {
            currentElement.classList.toggle('primary');

            if (currentElement.classList.contains('primary')) {
                currentElement.innerText = 'Log Out';
            } else {
                currentElement.innerText = 'Log in';
            }
        }
    }
}
