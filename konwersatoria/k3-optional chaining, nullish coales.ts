const foo = { bar: { baz: () => { } } };
const bar = ''

// optional chaining
// problem: 
if (foo && foo.bar) {
    const x = foo.bar.baz()
}
// const x = foo && foo.bar && foo.baz()

// optional chaining
const x = foo?.bar?.baz();
// ? nie robi 'falsy' values w przeciwieństwie do && w if, 


// nullish coalescing
// problem:
const y = (foo !== null && foo !== undefined) ? foo : bar;
// rozw
const z = foo ?? bar;
