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

const filterNonKeys = (arr, obj) => {
    return arr.filter((e) => {
            return obj[e]
           })
}

const info = {
    ironman: 'arrogant',
    spiderman: 'naive',
    hulk: 'strong'
  }
  const avengers = ['ironman', 'strange', 'thor', 'spiderman', 'hulk']
  const result = filterNonKeys(avengers, info)
  // result is ["ironman", "spiderman", "hulk"]
  console.log(result);

