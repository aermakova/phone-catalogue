import PhoneCatalogue from './components/phone-catalogue.js';
import PhoneViewer from './components/phone-viewer.js';
import PhoneService from './services/phone-services.js';
import PhoneFilter from './components/phone-filter.js';
import ShoppingCart from './components/shopping-cart.js';

export default class PhonePage {
    constructor({ element }) {
        this._element = element;
        this._render();
        this._initCatalog();
        this._initViewer();
        this._initFilter();
        this._initShoppingCart();
    }
    _initCatalog() {
        this._catalog = new PhoneCatalogue({
            element: this._element.querySelector('[data-component="phone-catalogue"]'),
            phones: PhoneService.getPhones(),
        });
        this._catalog.addListener('phoneClick', (phoneId)=> {
            console.log('click from parent 4');
            console.log(phoneId);
            let phoneDetails = PhoneService.getPhone(phoneId);
            this._catalog.hide();
            this._viewer.show(phoneDetails);
        });
    }
    _initViewer () {
        this._viewer = new PhoneViewer({
            element: this._element.querySelector('[data-component="phone-viewer"]'),
        });
    }
    _initFilter() {
        this._filter = new PhoneFilter({
            element: this._element.querySelector('[data-component="phone-filter"]'),
        });
    }
    _initShoppingCart() {
        this._cart = new ShoppingCart({
            element: this._element.querySelector('[data-component="shopping-cart"]'),
        });
    }
    _render() {
        this._element.innerHTML = `
        <div class="row">
            <!--Sidebar-->
            <div class="col-md-2">
                <section data-component="phone-filter"></section>

                <section data-component="shopping-cart"></section>
            </div>

            <!--Main content-->
            <div class="col-md-10">
                <div data-component="phone-catalogue"></div>
                <div data-component="phone-viewer"></div>
            </div>
        </div>
    `;
    }
}