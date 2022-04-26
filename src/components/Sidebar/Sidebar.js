import classNames from 'classnames';
import { Component } from '../../core/Component';
import { Button } from '../Button/Button';

import JSON_PRODUCTS from '../assets/database/products.json';

import './Sidebar.scss';

const categorys = [];

JSON_PRODUCTS.forEach(product => {
    if (!categorys.includes(product.category)) categorys.push(product.category);
});

const childs = categorys.map(category => {
    return new Button({
        className: 'sidebar-btn',
        class: ['button', 'sidebar-btn'].join(' '),
        children: [category]
    });
});

export class Sidebar extends Component {
    constructor() {
        super({
            tagName: 'aside',
            className: 'sidebar',
            children: childs,
            listeners: {}
        });
    }
}
