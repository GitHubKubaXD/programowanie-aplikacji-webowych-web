// ------------
// Dekoratory
// -----------
// * cały czas jako experimental w ts - trzeba włączyć flagę experimentalDecorators tsconfig.json, 
// * ? dodatkowa flaga do refleksji? emitDecoratorMetadata
// * dekoratory to funkcje,
// * dekorować możesz klasy, metody, akcesory propsow i parametrów
// używamy struktury @nazwaDekoratora dekorowanyElement

// ---------
// What for:
// ---------
// logging,
// memorizing,
// applying configs (ex enums)
// adding functionality (ex another method to class)
// ....

// ------------------
// dekorator do klasy/konstruktora
// ------------------
// zwraca TFunction | void
function classDecorator(constructorFn: Function): void {
    console.log('CLASS DECORATOR:', constructorFn);
}

//ex
function newPerson(constructorFn: Function): void {
    console.log('new Person decor:', constructorFn);
}
@newPerson
class Person1 {
    private lastName: string;
    constructor(name: string) {
        console.warn("from constructor,  name: ", name)
    }
    setLastName(lastName: string) {
        this.lastName = lastName;
    }
}

const p1 = new Person1('john');

// ----------------
// dekorator metody
// ----------------
// target: prototyp przypiętego obiektu, 
// propKey - nazwa metody
// descriptor - deskryptor metody (Object.getOwnPropertyDescriptor)
// descriptor zawiera .value - wywoływana funkcja 
// może zwracać void | PropertyDescriptor | TypedPropertyDescriptor
function methodDecorator(target: object, propKey: string, descriptor: PropertyDescriptor): PropertyDescriptor {
    console.log("METHOD DECORATOR: ", target, propKey, descriptor );
    const method = descriptor.value;

    descriptor.value = function (...args: any[]) {
        console.log('METHOD DECOCATOR DESCRIPTOR CALL', args )
        // convert list of method arguments to string
        const params = args.map(a => JSON.stringify(a)).join();

        // call method and get its return value
        const result = method.apply(this, args);

        // convert result to string
        const r = JSON.stringify(result);

        // display in console the function call details
        console.log(`METHO DECORATOR Call: ${propKey}(${params}) => ${r}`);

        // return the result of invoking the method
        return result;
    }
    return descriptor;

}
function logIt(target: object, propKey: string, descriptor: PropertyDescriptor) {
    console.log("LOG IT: ", target, propKey, descriptor );
}
@newPerson
class Person2 {
    private lastName: string;
    constructor(name: string) {
        console.warn("from constructor,  name: ", name)
    }
    @methodDecorator
    @logIt
    setLastName(lastName: string): string {
        this.lastName = lastName;
        console.warn('from setLastName', this.lastName)
        return "I'm " + lastName;
    }
}
const p2 = new Person2('kate')
console.warn(p2.setLastName('bush'))


// dekoratory mają swoje priorytety,
// kolejność: 
// parameter dec priority1(object instance, static)
// method dec priority2(object instance, static)
// accessor or property dec - priority3(object instance, static)
// class dec -  priority4(object instance, static)


// -------------------
// fabryka dekoratorów
// -------------------
function logTo(storage: 'console' | 'db'): Function {
    if (storage === 'console')   {
        return logIt;
    } else {
        return (target: any, propKey: string, descriptor: PropertyDescriptor) =>
            console.log("LOGGED TO DB: ", target, propKey, descriptor );
    }
}

class CarRental {
    @logProperty
    carList: string[] = [];

    @logTo('db')
    addCar(brand: string) {
        console.log('new car added: ', brand);
        this.carList.push(brand);
    }


}
let cr = new CarRental();
cr.addCar('audi');
console.warn(cr.carList);

// ---------------
// multidekoratory
// ---------------
// ewaluacja nastepuje z góry na dół
// wykonanie z dołu do góry

function appMenu(target: any, propKey: string) {
    console.log('app menu dec:', target, propKey);
}
class AppMenu {
    @logIt
    @appMenu
    @methodDecorator
    static addElement(el: string) {
        console.log('new menu element added: ', el);
    }
}

AppMenu.addElement('fiat');
// -----------------------------
// sygnatura dekoratora propsow
// ------------------------------
function propDecorator(target: Object, propertyKey: string | symbol): void {}

function logProperty(target: any, propertyName: string) {
    console.log("LOG PROPERTY DECORATOR", target, propertyName)
    // property value
    let _val = target[propertyName];
    
    // property getter method
    const getter = () => {
        console.log("LOG PROPERTY DECORATOR GETTER", target, propertyName)
        console.log(`Get: ${propertyName} => ${_val}`);
        return _val;
    };
    
    // property setter method
    const setter = (newVal: any) => {
        console.log("LOG PROPERTY DECORATOR SETTER", target, propertyName)
        console.log(`Set: ${propertyName} => ${newVal}`);
        _val = newVal;
    };

    // Delete property.
    if (delete this[propertyName]) {

        // Create new property with getter and setter
        Object.defineProperty(target, propertyName, {
            get: getter,
            set: setter,
            enumerable: true,
            configurable: true
        });
    }
}


// -----------------------------
// sygnatura dekoratora parametru
// ------------------------------
// zastosowanie - j/w + np. walidacja danych

// target - j/w
// propKey - nazwa metody
// index - pozycja argumentu
function paramDecorator(target: Object, propertyKey: string | symbol, parameterIndex: number): void {}

function logParameter(target: any, propertyName: string, index: number) {

    // generate metadatakey for the respective method
    // to hold the position of the decorated parameters
    const metadataKey = `log_${propertyName}_parameters`;
    if (Array.isArray(target[metadataKey])) {
        target[metadataKey].push(index);
    }
    else {
        target[metadataKey] = [index];
    }
}

class Employee {
    greet(@logParameter message: string): string {
        return `hello ${message}`;
    }
}
const emp = new Employee();
emp.greet('hello');
