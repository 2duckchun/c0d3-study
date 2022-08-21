const mergeArrays = (arr1, arr2) => {
  return [...arr1, ...arr2];
};

const a = mergeArrays(["1", "2"], ["3", "4", "5"]);
console.log(a);

const firstLongerThan = (arr, num) => {
  return arr.find((e) => {
    return e.length > 5;
  });
};

const b = firstLongerThan(["Ekans", "Arbok", "Pikachu", "Raichu"], 5);
console.log(b);
