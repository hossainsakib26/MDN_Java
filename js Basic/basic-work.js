let strObj = 'mozilla';

strObj.slice(2, 6);


let shopping = ['bread', 'milk', 'cheese', 'hummus', 'noodles'];

console.log(shopping)

let sequence = [1, 1, 2, 3, 5, 8, 13];
console.log(sequence);

let randomDataArray = ['tree', 795, [0, 1, 12]];
console.log(randomDataArray);

console.log(randomDataArray[2][2])

console.log(randomDataArray.length);


for (let i = 0; i < sequence.length; i++) {
    console.log(sequence[i]);
}

let myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
let myArray = myData.split(',');

console.log(myArray);

let arrayToString = myArray.toString();
console.log(arrayToString);

myArray.push('Cardig City');
console.log(myArray)
