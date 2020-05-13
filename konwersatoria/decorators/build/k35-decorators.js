var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function classDecorator(constructorFn) {
    console.log('CLASS DECORATOR:', constructorFn);
}
function newPerson(constructorFn) {
    console.log('new Person decor:', constructorFn);
}
let Person1 = class Person1 {
    constructor(name) {
        console.warn("from constructor,  name: ", name);
    }
    setLastName(lastName) {
        this.lastName = lastName;
    }
};
Person1 = __decorate([
    newPerson
], Person1);
const p1 = new Person1('john');
function methodDecorator(target, propKey, descriptor) {
    console.log("METHOD DECORATOR: ", target, propKey, descriptor);
    const method = descriptor.value;
    descriptor.value = function (...args) {
        console.log('METHOD DECOCATOR DESCRIPTOR CALL', args);
        const params = args.map(a => JSON.stringify(a)).join();
        const result = method.apply(this, args);
        const r = JSON.stringify(result);
        console.log(`METHO DECORATOR Call: ${propKey}(${params}) => ${r}`);
        return result;
    };
    return descriptor;
}
function logIt(target, propKey, descriptor) {
    console.log("LOG IT: ", target, propKey, descriptor);
}
let Person2 = class Person2 {
    constructor(name) {
        console.warn("from constructor,  name: ", name);
    }
    setLastName(lastName) {
        this.lastName = lastName;
        console.warn('from setLastName', this.lastName);
        return "I'm " + lastName;
    }
};
__decorate([
    methodDecorator,
    logIt
], Person2.prototype, "setLastName", null);
Person2 = __decorate([
    newPerson
], Person2);
const p2 = new Person2('kate');
console.warn(p2.setLastName('bush'));
function logTo(storage) {
    if (storage === 'console') {
        return logIt;
    }
    else {
        return (target, propKey, descriptor) => console.log("LOGGED TO DB: ", target, propKey, descriptor);
    }
}
class CarRental {
    constructor() {
        this.carList = [];
    }
    addCar(brand) {
        console.log('new car added: ', brand);
        this.carList.push(brand);
    }
}
__decorate([
    logProperty
], CarRental.prototype, "carList", void 0);
__decorate([
    logTo('db')
], CarRental.prototype, "addCar", null);
let cr = new CarRental();
cr.addCar('audi');
console.warn(cr.carList);
function appMenu(target, propKey) {
    console.log('app menu dec:', target, propKey);
}
class AppMenu {
    static addElement(el) {
        console.log('new menu element added: ', el);
    }
}
__decorate([
    logIt,
    appMenu,
    methodDecorator
], AppMenu, "addElement", null);
AppMenu.addElement('fiat');
function propDecorator(target, propertyKey) { }
function logProperty(target, propertyName) {
    console.log("LOG PROPERTY DECORATOR", target, propertyName);
    let _val = target[propertyName];
    const getter = () => {
        console.log("LOG PROPERTY DECORATOR GETTER", target, propertyName);
        console.log(`Get: ${propertyName} => ${_val}`);
        return _val;
    };
    const setter = (newVal) => {
        console.log("LOG PROPERTY DECORATOR SETTER", target, propertyName);
        console.log(`Set: ${propertyName} => ${newVal}`);
        _val = newVal;
    };
    if (delete this[propertyName]) {
        Object.defineProperty(target, propertyName, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    }
}
function paramDecorator(target, propertyKey, parameterIndex) { }
function logParameter(target, propertyName, index) {
    const metadataKey = `log_${propertyName}_parameters`;
    if (Array.isArray(target[metadataKey])) {
        target[metadataKey].push(index);
    }
    else {
        target[metadataKey] = [index];
    }
}
class Employee {
    greet(message) {
        return `hello ${message}`;
    }
}
__decorate([
    __param(0, logParameter)
], Employee.prototype, "greet", null);
const emp = new Employee();
emp.greet('hello');
//# sourceMappingURL=k35-decorators.js.map