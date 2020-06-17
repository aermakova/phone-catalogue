import Component from "../../component.js";

export default class PhoneFilter extends Component{
    constructor({ element }) {
        super({ element });
        this._render();
    }

    _render() {
        this._element.innerHTML = `
        <p>
            Search:
            <input data-sort-cataloque>
        </p>
        <p>
            Sort by:
            <select>
                <option value="name">Alphabetical</option>
                <option value="age">Newest</option>
            </select>
        </p>
    `;
    }
}