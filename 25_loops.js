//while
// do-while

const arr = [1, 2, 3, 4, 5];

// for
for (let i = 0; i < arr.length; i++) {
  const ele = arr[i];
  //   console.log(ele);
}

//- for-of, returns the elements of an Array.
for (const ele of arr) {
  // console.log(ele);
}

const greetings = "HelloWorld";
for (const ele of greetings) {
  // console.log(ele);
}

//- for-in, returns the keys and values from an array & the Objects.
const obj = {
  game1: "Badminton",
  game2: "Tennis",
};
for (const key in obj) {
  console.log(key); // gets the keys of an Obj
  console.log(obj[key]); // returns the values, for the associated keys of an Object
}

for (const key in arr) {
  console.log(key); // gets the keys of an Array / index.
  console.log(arr[key]); // returns the values, for the associated keys of an array.
}

//- for-Each
const lang = ["c", "c++", "js", "rb", "py"];
lang.forEach((ele) => {
  console.log(ele);
});

lang.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

//- Array Of Objects -
const coding = [
  { lang: "js", ext: ".js" },
  { lang: "python", ext: ".py" },
  { lang: "ruby", ext: ".rb" },
];

coding.forEach((ele) => {
  console.log(ele.ext);
});

//------------------------------------------------------------

//- Maps,
//. holds key-value of pair.
//. unique hence, doesn't hold any duplicate values.
const map = new Map();
map.set("IN", "India");
map.set("JPN", "Japan");
map.set("SK", "South Korea");

console.log(map);

//> Loop on Array using Maps
for (const ele of map) {
  console.log(ele); // gets the values in an array
}

//. place the ele element in the [], this becomes array Destructuring.
for (const [key, value] of map) {
  console.log(key, ":", value); // gets the keys from an array
  // console.log(value);  // gets the values from an array
}

//> Loops on Object using Maps
//! for-of doesn't works in Objects
//! for-of, works on Array.
