
class customElements  {
    constructor() {
        this.classes = {};
    }


    define(name, classObj) {
        console.log('define', name, classObj);
        this.classes[name] = classObj;
    }

    get(name) {
        return this.classes[name];
    }
}

export default new customElements;