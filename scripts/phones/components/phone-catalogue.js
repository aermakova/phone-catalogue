import Component from "../../component.js";

export default class PhoneCatalogue extends Component{
    constructor({ element, phones }) {
        super({ element });
        this._phones = phones;
        this._render();
        this._element.addEventListener('click', (event) => {
            this._onPhoneClick(event);
        });
        this._element.addEventListener('click', (event) => {
            this._onBtnClick(event);
        })
    }

    onClicked(event, dataName) {
        console.log(dataName)
        let phoneLink = event.target.closest(dataName);
        if (!phoneLink){
            return;
        }
        return phoneLink.closest('[data-element="phone"]');
    }

    _onPhoneClick(event) {
        console.log('phoneClick into createEvent 2');
        this.createEvent('phoneClick', this.onClicked(event, '[data-element="phone-link"]'));
    }

    _onBtnClick(event) {
        let phoneAddToCard = event.target.closest('[data-element="phone-item-add-to-cart"]');
        if (!phoneAddToCard){
            return;
        }
        let phoneElement = event.target.closest('[data-element="phone"]');
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
                <a href="#!/phones/${ phone.id }" 
                   class="thumb"
                   data-element="phone-link">
                  <img alt="${ phone.name }" src="${ phone.imageUrl }">
                </a>
                <div class="phones__btn-buy-wrapper">
                  <a class="btn btn-success" 
                     data-element="phone-item-add-to-cart">
                    Add
                  </a>
                </div>
                <a href="#!/phones/${ phone.id }"
                   data-element="phone-link"
                >
                    ${ phone.name }
                </a>
                <p>${ phone.snippet }</p>
              </li>
            `).join('') }
        </ul>
    `;
    }
}