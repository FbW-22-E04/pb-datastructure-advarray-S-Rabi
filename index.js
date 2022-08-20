// 1:
const orders = [
  { amount: 250 },
  { amount: 400 },
  { amount: 100 },
  { amount: 325 },
];
let totalPrice = 0;
orders.forEach((order) => (totalPrice += order.amount));
console.log(totalPrice);

// 2:

const arrayOfNumbers = [3, 45, 6, 56, 7, 9];

const array = arrayOfNumbers.map((item) => item + 1);
console.log(array);
console.log(arrayOfNumbers);

// 3:
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const evenNum = arr.filter((number) => {
//   return number % 2 === 0;
// });
// console.log(evenNum);

// second way of finding even numbers
const filterEvens = (numbers) => numbers.filter((elem) => elem % 2 === 0);
console.log(filterEvens([22, 2, 31, 110, 6, 13]));
console.log(filterEvens([1, 2, 3, 11, 12, 13]));

// 4:

const friends = ["rika", "jenna", "bleda", "oliver", "itamar"];

function filterFriends(friendsArray, key) {
  return friendsArray.filter((el) => el.includes(key));
}
console.log(filterFriends(friends, "ka")); // ["Jenna", "Bleda", "Oliver"];
console.log(filterFriends(friends, "e")); // ["Jenna", "Bleda", "Oliver"];

// 5:
const sumUp = (arrayOfNumbers) =>
  arrayOfNumbers.reduce((cur, acc) => cur + acc);
console.log(sumUp([6, 7, 7]));
console.log(sumUp([1, 2, 3, 4, 5]));

// 6:

const getSquareRoot = (arrayOfNumbers) =>
  arrayOfNumbers.map((el) => Math.sqrt(el));
console.log(getSquareRoot([1, 2, 4]));
