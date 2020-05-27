class Disposable {
    dispose() {
        this.isDisposed = true;
    }
    privateDispose() {
        this.isDisposed = true;
    }
}
class Activatable {
    activate() {
        this.isActive = true;
    }
    deactivate() {
        this.isActive = false;
    }
}
class SmartObject {
    constructor() {
        setInterval(() => console.log("SMART1 active: " + this.isActive + " , disposed: " + this.isDisposed), 500);
    }
    interact() {
        this.activate();
    }
}
applyMixins(SmartObject, [Disposable, Activatable]);
let smartObj = new SmartObject();
setTimeout(() => smartObj.interact(), 2000);
function applyMixins(baseClass, mixins) {
    console.warn('APPLY MIXIN');
    mixins.forEach(mixin => {
        console.log('mixin:', mixin);
        Object.getOwnPropertyNames(mixin.prototype).forEach(name => {
            console.log('property name: ', name);
            Object.defineProperty(baseClass.prototype, name, Object.getOwnPropertyDescriptor(mixin.prototype, name));
        });
    });
    console.warn('EO APPLY MIXIN');
}
//# sourceMappingURL=k41-composition.js.map