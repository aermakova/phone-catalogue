import Component from "../../component.js";

export default class ShoppingCart extends Component{
    constructor({ element }) {
        super({ element });

        this._items = {
            test: 2,
            foo: 3
        };

        this._render();
    }

    addItem(item) {
        if (!this._items[item]) {
            this._items[item] = 0;
        }
        this._items[item] ++;
        this._render();
    }

    removeItem(item) {
        if (this._items[item]) {
            this._items[item] --;
        }
        if (this._items[item] === 0) {
            delete this._items[item];
        }
        this._render();
    }
    _render() {
        this._element.innerHTML = `
        <h3>Shopping Cart</h3>
        <ul>
        ${ Object.keys(this._items).map(item => `
            <li>${ item }  (${ this._items[item] })
                <button 
                    class="remove-btn"
                    data-element="button-remove"
                    data-item="${ item }"
                >X</button>
            </li>
        `).join('') }
        </ul>
    `;
    }
}