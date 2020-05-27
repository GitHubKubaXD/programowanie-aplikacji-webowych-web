
// ----------
// Kompozycja 
// -----------
// * inny sposób na tworzenie złożonych obiektów
// * bazuje na zestawie obiektów prostych - partiali/mixinow
// hołduje zasadzie: Favor composition over inheritance ponieważ:
// (1) dziedziczenie "usztywnia" aplikację i obiekty
// (2) dziedziczenie moze przynosić z rodzica niepożądane właściwości (Animal.hairColor()-> Snake)


// --------
// Mixiny klas
// -------

// mixin 1
class Disposable {
    isDisposed: boolean;
    dispose() {
        this.isDisposed = true;
    }
    private privateDispose() {
        this.isDisposed = true;
    }

}

// mixin 2
class Activatable {
    isActive: boolean;
    activate() {
        this.isActive = true;
    }
    deactivate() {
        this.isActive = false;
    }
}

// klasa docelowa dla mixinow - szkielet
class SmartObject {
    constructor() {
        setInterval(() => console.log("SMART1 active: " + this.isActive + " , disposed: " + this.isDisposed), 500);
    }

    interact() {
        this.activate();
    }
}
// interface SmartObject {
//     interact()
// }

// czas na typowanie
// magia - interfejs o tej samej nazwie co klasa!
// #cotusiepodzialo - same name interface merge
// definiujemy interface dla klasy rozbudowanej o mixiny -
interface SmartObject extends Disposable, Activatable {}


// odpalamy łączenie
applyMixins(SmartObject, [Disposable, Activatable]);

// używamy klasy
let smartObj = new SmartObject();
setTimeout(() => smartObj.interact(), 2000);

// funkcja rozbudowująca klasę o mixiny
function applyMixins(baseClass: any, mixins: any[]) {
    console.warn('APPLY MIXIN') 
    mixins.forEach(mixin => {
        console.log('mixin:', mixin);
        Object.getOwnPropertyNames(mixin.prototype).forEach(name => {
            console.log('property name: ', name)
            Object.defineProperty(baseClass.prototype, name, Object.getOwnPropertyDescriptor(mixin.prototype, name));
        });
    });
    console.warn('EO APPLY MIXIN')
}

// --------------------
// mixin użyty w wielu kompozycjach (tutaj: Activatable)
// --------------------

class SmartObject2 {
    constructor() {
        setInterval(() => console.log("SMART2 active: " + this.isActive), 500);
    }

    interact() {
        // this.activate();
    }
}
interface SmartObject2 extends Activatable {}
applyMixins(SmartObject2, [Activatable]);
let smartObj2 = new SmartObject2();
setTimeout(() => smartObj2.interact(), 3000);


// Najpopularniejszy problem kompozycji - konstruktory mixinow