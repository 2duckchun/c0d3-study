// // Array.prototype.countForEach = function (cb) {
// //   this.forEachCount = (this.forEachCount || 0) + 1
// //   return this.forEachCount
// // }

// // const villains = ['Joker', 'Catwoman', 'Penguin', 'Riddler']
// // console.log(villains.countForEach(() => {}));
// // console.log(villains.countForEach(() => {}));
// // console.log(villains.countForEach(() => {}));
// // console.log(villains);

// // const moreVillains = ['Two-Face', 'Bane']
// // console.log(moreVillains.countForEach(()=>{}) + villains.countForEach(() => {}));

// Array.prototype.getNext = function() {
//   this.index = (this.index || 0) + 1
//   i = (this.index - 1) % this.length
//   return this[i]
// }

// const a = ["Edna", "Optimus", "Minion"]
// console.log(a.getNext());
// console.log(a.getNext());
// console.log(a.getNext());
// console.log(a.getNext());
// console.log(a.getNext());
// console.log(a.getNext());
//  // returns "Edna"
// a.getNext() // returns "Optimus"
// a.getNext() // returns "Minion"

// a.getNext() // returns "Edna"
// a.getNext() // returns "Optimus"
// a.getNext() // returns "Minion"

// a.getNext() // returns "Edna"



var 이거 = ["1", "2", "3"];
// var 저거 = ["4", "5", "6"];
var 그거 = ["1", "2", "3"]; 
// var 에휴 = ["1", "2", "3", "4"];

function 같은배열일까 (우에에, 그에에) {
  for (let i = 0; i < 우에에.length || i < 그에에.length; i++ ) {
    if(우에에[i] !== 그에에[i]) {
      return false
    }
  }
  return true
}

console.log(같은배열일까(이거, 그거));



// console.log(같은배열일까(이거, 저거));



console.log('안녕');