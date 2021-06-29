//Question 1
// function createEmployee(firstName, lastName, salary) {
//     return {
//       firstName: firstName,
//       lastName: lastName,
//       salary: salary,
// 	   employeeDetails(){
// 		  return firstName + ' ' + lastName + ' ' + salary ;
// 	  }
//    }
//   }
//   function Employee(firstName, lastName, salary) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.salary = salary;
//   }

//Question 2

// const emp = [
//     {
//         name: 'Zooav',
//         hiredDate: '02/03/2011',
//         dob: '29/01/1984',
//         salary: '9700',
//         age: function () {
//             console.log('age cal');
//         }
//     },
//     {
//         name: 'Adeeb',
//         hiredDate: '01/06/2021',
//         dob: '21/09/1999',
//         salary: '9200',
//         age: function () {
//             console.log('age cal');
//         }
//     },

//     {
//         name: 'Dipti',
//         hiredDate: '01/06/2021',
//         dob: '23/08/1998',
//         salary: '9600',
//         age: function () {
//             console.log('age cal');
//         }
//     },

//     {
//         name: 'Kailash',
//         hiredDate: '01/06/2021',
//         dob: '25/06/1996',
//         salary: '9000',
//         age: function () {
//             console.log('age cal');
//         }
//     },

//     {
//         name: 'Prabhu',
//         hiredDate: '01/06/2021',
//         dob: '23/04/1998',
//         salary: '9500',
//         age: function () {
//             console.log('age cal');
//         }
//     }
// ];
// const salArr = emp.map(element => element.salary);
// console.log(salArr);
// let max = salArr[0];
// for (let i = 0; i < salArr.length; i++) {
//     if (salArr[i + 1] > max){
//         max = salArr[i + 1];
//     }
// }
// let avgSal = 0;
// for (let i = 0; i < salArr.length; i++) {
//     avgSal += salArr[i] / salArr.length;
// }
// function maxSal(jydaRupee) {
//     return jydaRupee.salary == max;
// }
// console.log(avgSal);
// console.log(emp.find(maxSal));

//Question 3

// function circle(radius)
// {
//     this.radius = radius;
//     this.area = function () 
//     {
//         return Math.PI * this.radius * this.radius;
//     };
//     this.perimeter = function ()
//     {
//         return 2*Math.PI*this.radius;
//     };
// }
// var c = new circle(3);
// console.log('Area =', c.area().toFixed(2));
// console.log('perimeter =', c.perimeter().toFixed(2));

//Question 4

// function has(object, key) {
//     return object ? hasOwnProperty.call(object, key) : false;
//  }