import PhoneCatalogue from './components/phone-catalogue.js';
import PhoneViewer from './components/phone-viewer.js';
import PhoneService from './services/phone-services.js';

export default class PhonePage {
    constructor({ element }) {
        this._element = element;
        this._render();
        this._initCatalog();
        this._initViewer();
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
            }
         });
    }
    _initViewer () {
        this._viewer = new PhoneViewer({
            element: this._element.querySelector('[data-component="phone-viewer"]'),
        });
    }
    _render() {
        this._element.innerHTML = `
        <div class="row">
            <!--Sidebar-->
            <div class="col-md-2">
                <section>
                    <p>
                        Search:
                        <input>
                    </p>
                    <p>
                        Sort by:
                        <select>
                            <option value="name">Alphabetical</option>
                            <option value="age">Newest</option>
                        </select>
                    </p>
                </section>

                <section>
                    <p>Shopping Cart</p>
                    <ul>
                        <li>Phone 1</li>
                        <li>Phone 2</li>
                        <li>Phone 3</li>
                    </ul>
                </section>
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