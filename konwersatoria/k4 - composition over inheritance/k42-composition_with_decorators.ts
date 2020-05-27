// mixin 1
class ElementaryArithmtic {
    add(val1: number, val2: number): number {
        return val1 + val2;
    }
    multiple(val1: number, val2: number): number {
        return val1 * val2;
    }
}

// mixin 2
class SayHi {
    hi(): string {
        return 'Hi!';
    }
}

// dekorator dołączający mixiny do dekorowanej klasy
const Mixin = (mixins: any[]) => {
    return (baseClass: Function) => {
        mixins.forEach((classObject) => {
            Object.getOwnPropertyNames(classObject.prototype).forEach((name) => {
                if (name === 'constructor') return;
                const propDesc = Object.getOwnPropertyDescriptor(classObject.prototype, name);
                Object.defineProperty(baseClass.prototype, name, propDesc);
            });
        });
    };
};

// łączenie interfejsów
export interface MathService extends ElementaryArithmtic, SayHi { }

// aplikujemy dekorator do klasy
@Mixin([ElementaryArithmtic, SayHi])
export class MathService {
    addNumbers(val1: number, val2: number): number {
        return this.add(val1, val2);
    }
}

const mathSrv = new MathService();
console.log(mathSrv.add(1, 2));
console.log(mathSrv.hi());