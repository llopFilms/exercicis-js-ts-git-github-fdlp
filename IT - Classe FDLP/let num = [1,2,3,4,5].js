let num = [1,2,3,4,5];
let [a, b] = num; //1 2
console.log(a,b);
let [c,,,,d] = num; // 1 5
console.log(c,d);
console.log(num);

let e=2, f=6;
console.log(e,f); //2 6
[e,f] = [f,e];
console.log(e,f); //6 2

let num2 = [7, 8, 9, 10, 11];
let [g, h, ...arr] = num2;
console.log (g,h,); //7 8
console.log(...arr); // 9, 10, 11;
console.log(num2);