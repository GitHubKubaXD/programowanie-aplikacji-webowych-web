const foo = { bar: { baz: () => { } } };
const bar = ''
// TODO
// Moduły - import/export (commonjs)

// optional chaining
// problem: 
if (foo && foo.bar) {
    const x = foo.bar.baz()
}

// optional chaining
const x = foo?.bar?.baz();
// ? nie robi 'falsy' values w przeciwieństwie do && w if, 
// np 
// let count = 0
// let qty = count || 42;

// nullish coalescing
// problem:
const y = (foo !== null && foo !== undefined) ? foo : bar;
// rozw
const z = foo ?? bar;
