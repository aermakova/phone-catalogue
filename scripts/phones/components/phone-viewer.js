import Component from "../../component.js";

export default class PhoneViewer extends Component{
    constructor({ element }) {
        super({ element });
    }
    show(phoneDetails){
        this._phone = phoneDetails;
        this._render();

        super.show();
    }
    _render() {
        const { id, name, description, images } = this._phone;
        this._element.innerHTML = `
        <img class="phone" src="${ images[0] }">
        <button data-hide-viewer>Back</button>
        <button>Add to basket</button>
        <h1>${ name }</h1>
        <p>${ description }</p>
        <ul class="phone-thumbs">
            ${ images.map(phone =>
            `
            <li
                data-phone-id="${ id }"
                >
                <img alt="${ name }" src="${ phone }">
              </li>
            `).join('') }
        </ul>
        `;
    }
}