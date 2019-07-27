let x = 10;
const PI = 3.14159;
document.write(`${x} ${PI * 2}<br />`);

console.log(typeof true);
console.log(typeof 3.14);
console.log(typeof "string");
console.log(typeof Symbol());
console.log(typeof { a: 1 });
console.log(typeof [1, 2, 3]);
console.log(typeof undefined);

for (let c of "hello") {
  console.log(c);
}

let arr = ["b", "c", "d"];
arr = ["a", ...arr, "e"];
console.log(arr);

function prnt(num = 1) {
  console.log(`${arguments[0]}`);
}

prnt(5);

let prntarrw = param => console.log(param);

prntarrw("Arrow func");

let prntarrw2 = (param1, param2) => {
  console.log(param1);
  console.log(param2);
};

prntarrw2("text1", "text2");
