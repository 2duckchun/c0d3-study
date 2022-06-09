const obj = {
    name : '2DC',
    age : 30,
    alive : true,
    hobby : ['hiking', 'running']
};

const json = JSON.stringify(obj);
console.log(typeof json, json);

const prettyJson = JSON.stringify(obj, null, 2);
console.log(typeof prettyJson, prettyJson);

function filter(key, value) {
    return typeof value === 'number' ? undefined : value;
}

const strFilteredObject = JSON.stringify(obj, filter, 2);
console.log(typeof strFilteredObject, strFilteredObject);