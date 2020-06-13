// PRZYGOTOWANIE ŚRODOWISKA:
// npm init -y
// npm i jest, 
// npm i typescript
// npm i @types/jest (typy do pisania testów), 
// npm i ts-jest (pakiet do jest w ts - jest jest javascriptowy), 
// copy/paste jest.config.js (ze strony jest)

// URUCHOMIENIE:
//  update skryptów w package.json
// npm test: "jest"
// npm coverage: "jest --coverage"

import { Fibonacci } from ".";

describe('Fibonacci', () => {
    it('calculate 0', ()=>{
        const fib = new Fibonacci();
        const ret = fib.calculate(0);
        expect(ret).toBe(0);
    })
    it('calculate 1', ()=>{
        const fib = new Fibonacci();
        const ret = fib.calculate(1);
        expect(ret).toBe(1);
    })
    it('calculate 6', ()=>{
        const fib = new Fibonacci();
        const ret = fib.calculate(6);
        expect(ret).toBe(8);
    })
})

// wersja 2
// describe('Fibonacci', () => {
//     let fib: Fibonacci;

//     beforeAll(() =>
//         fib = new Fibonacci())

//     it('calculate 0', () => {
//         const ret = fib.calculate(0);
//         expect(ret).toBe(0);
//     })

//     it('calculate 1', () => {
//         const ret = fib.calculate(1);
//         expect(ret).toBe(1);
//     })

//     it('calculate 6', () => {
//         const ret = fib.calculate(6);
//         expect(ret).toBe(8);
//     })
// })

// wersja 3
// describe('Fibonacci', () => {
//     let fib: Fibonacci;
//     const fibCalculcateValues = [[0,0], [1,1], [6,8], [7,13]]; //[param(s), return]
//     beforeAll(() =>
//         fib = new Fibonacci())

//     // it to alias test
//     test.each(fibCalculcateValues)('calculate %i to be %i', (n, expectedRet) => {
//         const ret = fib.calculate(n);
//         expect(ret).toBe(expectedRet);
//     })
// })
