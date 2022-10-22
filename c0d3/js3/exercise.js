/*
Write a function called addKV that takes in an object, 
2 strings (key and value), and adds a new key and value to an object. 
*/

// Write a function called addKV that takes in an object, 2 strings (key and value), and adds a new key and value to an object.

const objec = {
    ironman: 'arrogant'
}

const addKV = (obj, key, value) => {
    obj[key] = value
    console.log(obj);
} 

addKV(objec, 'super', 'sonic')