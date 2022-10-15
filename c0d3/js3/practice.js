const arr = [1, 2, 3]
Array.prototype.delayedLast = function() {
    setTimeout(() => {
      console.log(this[this.length - 1])
    }, 1000)
}

arr.delayedLast()