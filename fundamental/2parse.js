const todos = [
    { id: 1, content: 'HTML', completed: false},
    { id: 2, content: 'CSS', completed: false},
    { id: 3, content: 'Javascript', completed: true},
];

const json = JSON.stringify(todos);
console.log('\nJSON.stringify:', typeof json, json);

const parse = JSON.parse(json);
console.log('\nJSON.parse:', typeof parse, parse);
