//Question 1

// const number = parseInt(prompt("Enter a positive number: "));
// let isPrime = true;
// if (number === 1){
//     console.log("1 is neither prime nor composite number.");
// }
// else if (number > 1){
//     for (let i = 2; i < number; i++) {
//         if (number % i == 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) {
//         console.log(`${number} is a prime number`);
//     } else {
//         console.log(`${number} is a not prime number`);
//     }
// }
// else {
//     console.log("The number is not a prime number.");
// }

//Question 2

// function binarySearch(sortedArray, key){
//     let start = 0;
//     let end = sortedArray.length - 1;
//     while (start <= end) {
//         let middle = Math.floor((start + end) / 2);
//         if (sortedArray[middle] === key) {
//             return middle;
//         } else if (sortedArray[middle] < key) {
//             start = middle + 1;
//         } else {
//             end = middle - 1;
//         }
//     }
//     return -1;
// }

//Question 3

// function findLongestWord(str) {
//     var strSplit = str.split(' ');
//     var longestWord = 0;
//     for(var i = 0; i < strSplit.length; i++){
//       if(strSplit[i].length > longestWord){
//       longestWord = strSplit[i].length;
//        }
//     }
//     return longestWord;
//   }

//Question 4

// function number_game(x, y) {
//     let numbers = [];
//     if (x > y) {
//       for (let i = y + 1; i < x; i++) {
//         if (i % 2 == 0) {
//           numbers.push(i);
//         }
//       }
//     } else {
//       for (let i = x + 1; i < y; i++) {
//         if (i % 2 == 1) {
//           numbers.push(i);
//         }
//       }
//     }
//     return numbers;
//   }
//   console.log(number_game(12, 0));
//   console.log(number_game(2, 12));