const obj = {
    name : '2DC',
    age : 30,
    alive : true,
    hobby : ['hiking', 'running']
};

const json = JSON.stringify(obj);
console.log(typeof json, json);

const parsed = JSON.parse(json);
console.log(typeof parsed, parsed);