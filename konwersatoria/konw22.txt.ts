// ------------
// ...c.d.typów
// ------------


// Type assertion: '12' as number
// let aa = document.querySelector('#asd'); // type: Element
let aa: HTMLInputElement = document.querySelector('#asd'); // type: HTMLInputElement
(aa as HTMLInputElement).value


let a = 12;
// const b: string = a; //error
// const b: string = a as string; // error - no bo jak?
const b: string = a as unknown as string; // brzydko, czasami wiemy lepiej niż typescript language service


// tablice
let arrA: number[]; // = [1, 2, 3]
// alternatywny sposób
let arrB: Array<number>;

// czy const jest zawsze const?
const constArr = [1, 2, 3];
constArr.push(4);
// rozwiązanie: ReadonlyArray<T>

// ------------
// DESTRUKTURYZACJA
// ------------
let destrA = ['john', 'doe'];
let [fname, lname] = destrA;
// dlaczego nie mogę [fname, lname]: [string, string] ale musze string[]?

// pomocne przy szybkiej podmianie wartości
// [a, b] = [b ,a];

// destrukturyzację można zastosować również do obiektów

// ------------
// REST PARAMETERS
// ------------
function restParams(first: number, ...others: number[]) {
    console.log(first, others)
}
restParams(10, 12, 123, 234, 345, 345, 45, 645, 7, 56, 686)


// ------------
// SPREAD OPERATOR 
// ------------

// działa na array & objects (tylko enumerable props - bez metod)
let first = [1, 2];
let second = [3, 4];
let bothPlus = [0, ...first, ...second, 5];
// [0, 1, 2, 3, 4, 5] z spread
// [0, [1,2], [3,4], 5] bez spread

// ------------
// Enumeratory
// ------------

// liczbowe: 
enum PermTypes {
    none,
    read,
    write
}
enum SmarterPermTypes { 'none' = 1, 'read' = 2, 'write' = 4, 'exec' = 8 } // dlaczego smarter?

// const upr = PermTypes.read | PermTypes.write
// tekstowe
enum StringPermTypes {
    none = 'none',
    read = 'read',
    write = 'write'
}
let userPerm: PermTypes = PermTypes.read // = 1
// można też odwrotnie: PermTypes[1] // = 'read'
// liczbowe z przypisaniem: 

// ------------
// INTERFEJSY
// ------------
interface Box {
    color?: string; // właściwość opcjonalna
    readonly id: number; // readonly 
    isEmpty?(): boolean; // funkcje
}

// implementacja: 
class BoxObject implements Box {
    id = 1;
}

interface BoxLabelsCollection {
    [propName: string]: { id: number, label: string }; //index signature -  właściwości obiektu
}
let blc: BoxLabelsCollection = { 'fragiles': { id: 1, label: 'Fragile' } } // dzięki index sign mamy typowanie


interface Package {
    fabric: 'wood' | 'plastic' | 'glass';
}
let pck: Package = { fabric: "glass" }; // j/w

//  rozszerzanie: 
interface BoxWithDimensions extends Box { //można rozszerzać po wielu interfejsach
    width: number;
    height: number;
}
// implementacja wielu interfejsów
class FullBox implements Box, Package {
    id = 1;
    width = 10;
    height = 20;
    fabric: 'wood';
    isEmpty() {
        return true;
    }
}