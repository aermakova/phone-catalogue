import PhoneCatalogue from './components/phone-catalogue.js';
import PhoneViewer from './components/phone-viewer.js';
import PhoneService from './services/phone-services.js';
import PhoneFilter from './components/phone-filter.js';
import PhoneCart from './components/phone-filter.js';

export default class PhonePage {
    constructor({ element }) {
        this._element = element;
        this._render();
        this._initCatalog();
        this._initViewer();
        this._initFilter();
        this._initCart();
    }
    _initCatalog() {
         this._catalog = new PhoneCatalogue({
             element: this._element.querySelector('[data-component="phone-catalogue"]'),
             phones: PhoneService.getPhones(),
             onPhoneSelected: (phoneId) => {
                let phoneDetails = PhoneService.getPhone(phoneId);
                this._catalog.hide();
                this._viewer.show(phoneDetails);
                console.log(phoneId);
             },
         });
    }
    _initViewer () {
        this._viewer = new PhoneViewer({
            element: this._element.querySelector('[data-component="phone-viewer"]'),
            onBtnClicked: () => {
                this._viewer.hide();
                this._catalog.show();
            }
        });
    }
    _initFilter() {
        this._viewer = new PhoneViewer({
            element: this._element.querySelector('[data-component="phone-filter"]'),
        });
    }
    _initCart() {
        this._viewer = new PhoneCart({
            element: this._element.querySelector('[data-component="phone-cart"]'),
        });
    }
    _render() {
        this._element.innerHTML = `
        <div class="row">
            <!--Sidebar-->
            <div class="col-md-2">
                <section data-component="phone-filter"></section>

                <section data-component="phone-cart"></section>
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