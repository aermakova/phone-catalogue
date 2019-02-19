import PhoneCatalogue from './components/phone-catalogue.js';
import PhoneService from './services/phone-services.js';

export default class PhonePage {
    constructor({ element }) {
        this._element = element;

        this._render();
        new PhoneCatalogue({
            element: this._element.querySelector('[data-component="phone-catalogue"]'),
            phones: PhoneService.getPhones(),
            onPhoneSelected: (phoneId) => {
                console.log(phoneId);
            }
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
            </div>
        </div>
    `;
    }
}