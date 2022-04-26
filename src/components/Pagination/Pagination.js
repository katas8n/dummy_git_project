import './Pagination.scss';

import { Component } from '../../core/Component';
import JSON_PRODUCTS from '../assets/database/products.json';

const pages = [];
for (let i = 0, j = 0; i < JSON_PRODUCTS.length; i++) {
    if (i % 4 === 0) {
        j++;
        pages.push(`<span id=${+j}>${+j}</span>`);
    }
}

export class Pagination extends Component {
    constructor() {
        super({
            tagName: 'div',
            className: 'pagination',
            current: 1,
            children: [pages.join(' ')],
            listeners: {
                // click: () => console.log('Hello world')
            }
        });
    }
}
