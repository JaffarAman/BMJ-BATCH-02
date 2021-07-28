// console.log("HELLO CLASS....")

var obj = {
  name: "Jaffar",
  gender: "Male",
  option: {
    a: 10,
    b: 20,
  },
};

////DOT NOTATION////
// console.log(obj.name);

/////BRACKET NOTATION/////
// console.log(obj[object]);

////ARRAY IN OBJ ///
var obj = {
  name: "Jaffar",
  courses: ["html", "css", "js"],
};

// console.log(obj.courses[1]);

////check prop in obj///

///prop   //obj//
// var check = "name" in obj
// console.log(check);

// delete obj.courses
// console.log(obj);

// var obj = {
//     firstName : "Jaffar",
//     lastName : "Aman",
//     fullName :function(){
//         return this.firstName + " " + this.lastName
//     }

// }
// console.log(obj.fullName());

////////NEW TOPIC//////

//  var std1 = {
//      name : "sarim",
//      age : 16
// }

//  var std2 = {
//      name : "sarim",
//      age : 16
// }
///ES5////

/////constructors Function////
////function ky andar object///

// function Student(get_name , get_age , courses ,gender){
//     this.name = get_name
//     this.age = get_age
//     this.courses = courses
//     this.gender = gender
// }

// var std1 = new Student("Sarim" , 16 , ["htm;" ,"css"] , "Male")
// // var std2 = new Student("Ali" , 25)
// // var std3 = new Student("lucky" , 21)
// console.log(std1);

// function Std(firstName , lastName){
//     this.firstName = firstName
//     this.lastName = lastName
//     // this.fullName = function(){
//     //     return this.firstName + " " +
//     //     this.lastName
//     // }
//     this.fullName = this.firstName + this.lastName
// }

// var std1 = new Std("Jaffar" , "Aman")
// console.log(std1.fullName);

var numEmp = prompt("Enter number of Emp");

// var empArr = [];

var tr = document.getElementById("tr");

for (var i = 0; i < numEmp; i++) {
  var empName = prompt("Enter Emp Name"+ " " + (i + 1)  );
  var empSalary = parseInt(prompt("Enter Emp Salary" + " " + (i + 1)));
  var empDay = +prompt("Month Days" + " " +(i + 1));

  var empObj = {
    name: empName,
    salary: empSalary,
    day: empDay,

    perDaySal: function () {
      return this.salary / 30;
    },
    totalSalary: function () {
      return this.perDaySal() * this.day;
    },
  };
//   empArr.push(empObj);


// tbody.innerHTML += `<tr> <td>${empObj.name}</td>
//             <td>${empObj.salary}</td>
//             <td>${empObj.day}</td>
//     <td>${empObj.perDaySal()}</td>
//     <td>${empObj.totalSalary()}</td> </tr>`;


    tbody.innerHTML += "<tr>" +
    "<td>" + empObj.name  +"</td>" + 
    "<td>" + empObj.salary  +"</td>" +
    "<td>" + empObj.day  +"</td>" +
    "<td>" + empObj.perDaySal()  +"</td>" +
    "<td>" + empObj.totalSalary()  +"</td>" +
    "</tr>"

}
