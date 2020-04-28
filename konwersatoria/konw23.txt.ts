// excess property checking dla literałów (interface nie może mieć index signature!)
interface SquareConfig {
    color?: string;
    width?: number;
}
function createBox(config: Box): number {
    return config.id;
}
let newBox = createBox({ id: 12, colour: "red" }); // , coloUr????
// rozwiązania:
// 1. index signature w interfejsie
// 2. type assertion: {id: 12, colour: 'red'} as Box 
// 3. przypisanie literału do zmiennej: boxConfig = {id: 12, colour: 'red'}; - excess checking wylączone

// interfejsy dla funkcji:
interface SortFunc {
    (source: string[]): string[];
}
let bubbleSort: SortFunc;
bubbleSort = (data: string[]): string[] => {
    return data;
}

// na koniec ciekawostka - interfejsy mogą dziedziczyć po klasach:)
// dziedziczą jedynie definicję, nie implementację!

// ------------
// Klasy
// ------------
// deklaracja klasy tworzy dwie rzeczy - konstruktor dla nowych obiektów oraz typ.

class Person {
    private _firstName: string;
    set firstName(fname: string) {
        this._firstName = fname;
    };
    get firstName(): string {
        return this._firstName;
    }

    protected lastName: string;
    // public jest domyślnie
    protected constructor(firstName: string, lastName: string) { // protected constuctor!
        this.firstName = firstName;
        this.lastName = lastName
    }
    getName(): string {
        return this.firstName;
    }
    static sex: string[] = ['male', 'female', 'sometimes camel'];
}
let john = new Person('john', 'doe') // nowy obiekt z klasy. UPS?
john.firstName = 'amy' // użycie settera
const s = Person.sex[1] // użycie właściwości statycznej klasy Person

// inny sposób deklaracji właściwości klas z użyciem konstruktora
class Person2 {
    age: number;
    constructor(private firstName: string, public lastName: string) { }

    getPersonalData(): string {
        return `${this.firstName} ${this.lastName}`;
    }
}

//dziedziczenie - klasyka
class Student extends Person {
    constructor(firstName: string, lastName: string) {
        super(firstName, lastName); // uruchomienie konstruktora rodzica
    }
    getName(): string {
        return 'Student ' + super.getName(); // odwołanie do metody rodzica
    }
    get surname(): string {     // brak settera = readonly
        return this.lastName;
    }
}

// klasy astrakcyjne 
abstract class Creature { }

// ------------
// Type quards 
// ------------ 
function charLength(a: string | string[]) {
    if (a instanceof Array) { // dlaczego nie typeof a === 'array'?
        // ...
    }
}
//another way: assert(typeof str === "string");

// ------------
// Funkcje
// ------------
function sum(a: number, b: number): number {
    return a + b;
}
// parametry nieobowiązkowe
function avg(a: number, b: number, c?: number) { }
// wartości domyślne
function min(a: number, b = 0, c = 0) { }

// function overload
function on(ev: MouseEvent): string;
function on(ev: Event): number;
function on(ev: any): any { console.log(ev); };
// preferuj parametry opcjonalne zamiast overload
// wyjaśnienie: https://www.typescriptlang.org/docs/handbook/declaration-files/do-s-and-don-ts.html#use-optional-parameters
