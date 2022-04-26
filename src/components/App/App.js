import { ProductsList } from '../ProductsList/ProductsList';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';
import { Component } from '../../core/Component';
import { Sidebar } from '../Sidebar/Sidebar';

import './App.scss';

export class App extends Component {
    constructor() {
        const header = new Header();
        super({
            className: 'app',
            children: [
                `${header.toHTML()}`,
                new Sidebar(),
                new ProductsList(),
                new Footer()
            ],
            listeners: {
                click: e => this.onClickHandler(e)
            }
        });
    }
    onClickHandler(e) {
        const component = e.target;

        const componentClassName = component.className;
        const isSidebarButton = component.className.includes('sidebar-btn');

        const isIcon = component.tagName === 'i' || 'I';

        const sidbar = document.querySelector('.sidebar');

        const btns = sidbar.children;

        if (isSidebarButton) {
            for (let i = 0; i < btns.length; i++) {
                const btnsClasses = btns[i].className;
                btns[i].id = i;

                if (btnsClasses.includes('--active')) {
                    btns[i].classList.remove('--active');
                }
            }

            component.classList.add('--active');
        }
    }
}
