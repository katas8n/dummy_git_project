import { isNumber } from '../utils';

const DEFAULT_TAG_NAME = 'div';

export class Component {
    constructor(options) {
        let {
            tagName = DEFAULT_TAG_NAME,
            className,
            attrs,
            children,
            listeners = {}
        } = options;

        this._component = document.createElement(tagName);
        this._component.className = className;

        for (let attrName in attrs) {
            const attrValue = attrs[attrName];

            if (!attrValue && !isNumber(attrValue)) continue;

            this._component.setAttribute(attrName, attrValue);
        }
        for (const eventType in listeners) {
            const handler = listeners[eventType];

            if (!handler) continue;

            this._component.addEventListener(eventType, handler);
        }

        if (!Array.isArray(children)) return;

        for (let child of children) {
            const isHTML = typeof child === 'string';

            if (isHTML) {
                this._component.insertAdjacentHTML('beforeend', child);
            } else {
                this._component.append(child.toNode());
            }
        }
    }
    toNode() {
        return this._component;
    }
    toHTML() {
        return this._component.outerHTML;
    }
}
