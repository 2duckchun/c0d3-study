let user = {
    name : 'soo',
    age : 30
};

let id = Symbol("id");

user[id] = 1;

console.log(user[id]);