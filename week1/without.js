without = (exclude, arr) => {
   let result = arr.filter(item => !exclude.includes(item))
   return result
}


console.log(without([5,6], [1,2,3,4,5,6]));