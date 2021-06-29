//Question 1

// let arr = [0, 1, false, 2, undefined, '', 3, null];
//   function filterArray(arr) {
//     let output = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i]) {
//         output.push(arr[i]);
//       }
//     }
//     return output;
//   } 
//   console.log(filterArray(arr));

//Question 2

// let values = [1, 2]
// let arr = [1, 2, 3, 1, 2]
// arr = arr.filter(item => !values.includes(item))
// console.log(arr);

//Question 3

// let arr = [1, 2, 3, 1, 2]
// let dupArr = new Set(arr);
// arr = Array.from(dupArr);
// console.log(arr);

//Question 4
 
// function splitIntoChunk(arr, chunk) {
//     for (i=0; i < arr.length; i += chunk) {
//         let tempArray;
//         tempArray = arr.slice(i, i + chunk);
//         console.log(tempArray);
//     }
// }
// const array = [1, 2, 3, 4, 5];
// const chunk = 2;
// splitIntoChunk(array, chunk);




// let people = ["Ankur", "Zooav", "Elewiss", "Crossy"];

//Question 5a

// for (i = 0; i< people.length;  i++) {
//     console.log(people[i]);
// }

//Question 5b

//  people.shift();
//  console.log(people);

//Question 5c

//  people.pop();
//  console.log(people);

//Question 5d

// console.log(people);
// people.unshift("Matt");
// console.log(people);

//Question 5e

// people.push('Kailash');
// console.log(people);


//Question 5f

// for (i = 0; i< people.length;  i++) {
//     console.log(people[i]);
//     if(people[i] == "Zooav" ){
//         break;
//     }
// }

// Question 5g

// let peopleCopy = people.slice(1,4);
// console.log(peopleCopy);

// Question 5h

// console.log(people.indexOf("Zooav"));

// Question 5i

// console.log(people.indexOf("foo"));


//Question 5j

// people.splice(2,1,"Elizabeth", "Artie");
// console.log(people);

//Question 5k

// let withBob = people.concat("Bob");
// console.log(withBob);
 

//Question 6

// var library = [ 
//     { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
//     { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
//     { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
//     ];
//  function sortTitle(a,b) 
//   {
//    if (a.title < b.title)
//      return -1;
//    if (a.title > b.title)
//      return 1;
//    return 0;
//   }
//  console.log(library.sort(sortTitle));