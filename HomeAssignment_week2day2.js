//program to find the sum of the given array
const arr = [1, 2, 3, 2, 4, 5, 1, 4, 9, 7];
let sum = 0;
for(let i=0; i < arr.length; i++){
    sum = sum + arr[i];
}
console.log("sum of the given array is: " + sum);
