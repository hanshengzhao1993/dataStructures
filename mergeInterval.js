var mergeInterval = function (array) {
  array = array.sort( (a,b)=>{
    if(a.start > b.start){
      return 1;
    } else {
      return -1;
    }
  })
  console.log(array);

  for(var i = 0, count = 0; i < array.length && count < array.length; i++){
    if(array[count].end > array[count + 1].start){
      array.splice(i, i+ 2, [array[count].start, array[count + 1].end])
    } else {
      count++;
      array[count] = [array[count].start, array[count].end]
    }
    console.log(array)
  }
  return array;
}

// console.log(mergeInterval(
//   [ { start: 1, end: 3 },
//     { start: 2, end: 6 },
//     { start: 8, end: 10 },
//     { start: 15, end: 18 } ]
// ))

var anagrams = function (arr) {
  var ana = {};
  for(var i = 0; i < arr.length; i++){
    var sortedWord = arr[i].split('').sort().join('');
    if(ana[sortedWord] === undefined){
      ana[sortedWord] = [arr[i]];
    } else {
      ana[sortedWord].push(arr[i])
    }
  }
  return ana;
}

var words = ["dell", "ledl", "abc", "cba"];
console.log(anagrams(words));