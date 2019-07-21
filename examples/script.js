// Strings, number
let productName="Blockchain",
    productName2="Blockchain";
console.log(productName, productName2, productName2)
console.log(typeof(productName))
console.log(typeof(9))

let result = 1010/10;
console.log(result, typeof(result));

// Boolean. true or false
let flag=true
console.log(flag, typeof(flag));

// underfined, null types
let one, 
    two = null;
console.log(one, two);

// Arrays
let myArray = ['New york', 'Singapore', 'london', 'Canada'];
console.log(myArray[0], myArray[3])
myArray.push("Italy")
console.log(myArray);
myArray.pop()
console.log(myArray);
myArray.shift();
console.log(myArray);
myArray.splice(2, 1);
console.log(myArray);
myArray.push("Rome");
console.log(myArray);
myArray.push("Italy");
console.log(myArray);
myArray.splice(0, 2);
console.log(myArray);
myArray.splice(0, 2, "New zealand", "Greece", "Israel");
console.log(myArray);


// For loop
for (let i=0; i<3; i++){
    console.log(i);
}

// Math and Date
let rand = Math.random() * 52;
rand = Math.trunc(rand);
console.log(rand);

let dt = new Date();
console.log(dt.toDateString());

console.log(Number.isNaN(10/20));

