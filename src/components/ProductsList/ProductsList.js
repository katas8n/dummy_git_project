import JSON_PRODUCTS from '../assets/database/products.json';
import { Button } from '../Button/Button';
import { Component } from '../../core/Component';

import classNames from 'classnames';

import './ProductsList.scss';

const buyButton = new Button({
    class: classNames('button', 'main-button'),
    children: ['<i class="fas fa-shopping-basket"></i>']
});
const toFavorites = new Button({
    class: classNames('button', 'main-button'),
    children: ['<i class="fab fa-jedi-order"></i>']
});

const products = JSON_PRODUCTS.map(el => {
    const {
        id,
        category,
        manufacturer,
        country,
        imageSrc,
        price,
        description
    } = el;

    const domElem = `
      <div class="main__content-wrapper" id=${id}>
        <div class="main__content-manufacturer">${manufacturer}</div>
        <div class="main__content-category">${category}</div>
        <div class="main__content-img__wrapper">
          <img class="main__content-img" src=${imageSrc}></img>
        </div>
        <div class="main__content-country">${country}</div>
        <div class="main__content-desc">${description.slice(0, 270)}</div>
        <div class="main__content-btns__price-wrapper">
        <div class="main__content-price__wrapper">
        <div class="main__content-desc__price">Price : </div>
        <div class="main__content-price">${price}$</div>
        </div>
        <div class="main__content-btns">
            ${buyButton.toHTML()}
            ${toFavorites.toHTML()}</div>
          </div>
        </div>
     `;

    return domElem;
});

export class ProductsList extends Component {
    constructor() {
        super({
            tagName: 'main',
            className: 'main',
            children: products,
            listeners: {}
        });
    }
}
