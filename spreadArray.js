const num = [2, 5, 6, 1, 3, 7, 8, 9];
const num2 = [24, 38, 42];
// console.log(Math.max(...num));

// const newArr = [50, 25,...num2, 38, 140];
// console.log(newArr);

// const arr = [1,2,3,4,5];
// const arr2 = [...arr];
// arr.push(20);
// arr2.push(50);

// console.log(arr);
// console.log(arr2);

const arr = [1,2,3,4,5,6,7];
// const fst = arr[0];
// const snd = arr[1];
const [p,k,m, ...rename] = arr;
// console.log(p, k, m);
console.log(rename);