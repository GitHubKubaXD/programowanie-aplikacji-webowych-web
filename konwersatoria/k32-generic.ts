
// generic
// problem - funkcja która pracuje z różnymi typami argumentów
function identity(arg: any): any {
    return arg; // say whaaat is it? 
}

// rozw.
function identityGeneric<T>(arg: T): T {
    return arg;
}
const xx = identityGeneric<number>() // xx: number

// przykład wbudowanego w język generic types
// const people: string[] = []
// const people: Array<string> = []

// generic class
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}
const metric = new GenericNumber<number>()
const wynik = metric.add(10, 10)

// oganiczanie generic
interface LoggedUser {
    length: string;
}

function loggingIdentity<T extends LoggedUser>(arg: T): T {
    console.log(arg.length);  // Now we know it has a .length property, so no more error
    return arg;
}

// ograniczanie do listy typów
function getLength<T extends string | number> (data: T): T {
    let ret: T;
    //do something with ret
    return ret;
}
// wiele typów generycznych
function getElement<T, V> (data: T, value: V): V {
    let ret: V;
    //do something with ret
    return ret;
}

// generic type parameters
function getProperty<T, K extends keyof T>(obj: T, key: K) {
    return obj[key];
}

const x2 = { a: 1, b: 2, c: 3, d: 4 };

// ok
getProperty(x2, "a");

// error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.
// getProperty(x2, "m"); 
















