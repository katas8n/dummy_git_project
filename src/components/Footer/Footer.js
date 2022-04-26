import { Component } from '../../core/Component';

import './Footer.scss';
import { Pagination } from '../Pagination/Pagination';

export class Footer extends Component {
    constructor() {
        const pag = new Pagination();
        super({
            tagName: 'footer',
            className: 'footer',
            children: [pag]
        });
    }
}
