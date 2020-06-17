import Component from "../../component.js";

export default class PhoneCatalogue extends Component{
    constructor({ element, phones, phoneSelected }) {
        super({ element });
        this._phones = phones;
        this._phoneSelected = phoneSelected;
        this._render();
        this._element.addEventListener('click', (event) => {
            this._onPhoneClick(event);
        });
        this._element.addEventListener('click', (event) => {
            this._onBtnClick(event);
        })
    }

    _onPhoneClick(event) {
        let phoneElement = event.target.closest('[data-element="phone"]'),
            phoneBtn = event.target.closest('[data-element="phone-item-add-to-cart"]');
        if (!phoneElement || phoneBtn){
            return;
        }
        this._phoneSelected(phoneElement.dataset.phoneId);
    }

    _onBtnClick(event) {
        let phoneAddToCard = event.target.closest('[data-element="phone-item-add-to-cart"]'),
            phoneElement = event.target.closest('[data-element="phone"]');
        if (!phoneAddToCard){
            return;
        }
            console.log(phoneElement.dataset.phoneId);
            console.log('Add to cart');
    }

    _render() {
        this._element.innerHTML = `
        <ul data-element="phone-item" class="phones">
            ${ this._phones.map(phone => 
            `
            <li class="thumbnail" 
                data-element="phone" 
                data-phone-id="${ phone.id}"
                >
                <a href="#!/phones/${ phone.id }" class="thumb">
                  <img alt="${ phone.name }" src="${ phone.imageUrl }">
                </a>
                <div class="phones__btn-buy-wrapper">
                  <a class="btn btn-success" data-element="phone-item-add-to-cart">
                    Add
                  </a>
                </div>
                <a href="#!/phones/${ phone.id }">${ phone.name }</a>
                <p>${ phone.snippet }</p>
              </li>
            `).join('') }
        </ul>
    `;
    }
}