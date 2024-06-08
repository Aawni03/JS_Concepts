//- forEach
const code = ["js", "c++", "python", "java", "ruby"];
const values = code.forEach((ele) => {
  console.log(ele);
  return ele;
});
//. ForEach doesn't return anything, we need to manually return

//- filter -----------------------------------------
const ArrNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNum1 = ArrNums.filter((ele) => ele > 5);
console.log(newNum1); //. filter, automatically returns the array of elements.

const newNum = ArrNums.filter((ele) => {
  return ele > 5;
});
console.log(newNum); //. filter, once the {} scope started we need to explicitly write the return keyword

// - filter in For Each -------------
const filterinForEach = [];
ArrNums.forEach((ele) => {
  if (ele > 5) {
    filterinForEach.push(ele);
  }
});
console.log(filterinForEach);

//- Map -----------------------------------------------
const mapNums = ArrNums.map((num) => {
  return num + 10;
});

console.log(mapNums);

//- chaining  ------------------------------------------
const chainingMap = ArrNums.map((num) => num * 10)
  .map((ele) => ele + 1)
  .filter((num) => num > 40);

console.log(chainingMap);

//- Reduce ----------------------------------------------
//. takes a callback func, having accumulator & the currentValue
//. Accumulator, would the initial value then the final / result value of the operation
//. currentValue,
//. generally used in calculating the shopping cart price.

const reduceNums = ArrNums.reduce((acc, currVal) => {
  console.log(`Acc : ${acc}, curVal : ${currVal}`);
  return acc + currVal;
}, 0); //. initial value of the accumulator
console.log(reduceNums);

const reduceInOneLine = ArrNums.reduce((acc, curVal) => acc + curVal, 0);
console.log(reduceInOneLine);





