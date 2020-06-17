const CLASS_HIDDEN = "js-hidden";
export default class Component {
    constructor({ element }) {
        this._element = element;
    }
    hide(){
        this._element.classList.add(CLASS_HIDDEN);
    }
    show(){
        this._element.classList.remove(CLASS_HIDDEN);
    }
    //eventName = 'phoneClick', callback = function hide catalog
    addListener(eventName, callback) {
        console.log('child listener init 1');
        this._element.addEventListener(eventName, (event)=>{
            callback(event)
        });
    }

    //'phoneClick', phoneId
    createEvent(eventName, data) {
        let event = new CustomEvent(eventName, {
            detail: data
        });
        console.log('createEvent init 3');
        //trigger Custom event
        this._element.dispatchEvent(event)
    }
}