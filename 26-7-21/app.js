// var now = new Date()

// console.log(typeof now);

// var arr = [20,50,"sarim"]


// console.log(arr[1]);

////CREATE ARRAY///
// var arr = ["sarim" , 16 , "male" ]
// console.log(arr);

////CREATE OBJECT///

// var obj = {
//     name : "Sarim" , 
//     age : 16,
//     isActive : true,
//     result:undefined

// }


// console.log(obj.isActive);

// var arr = [];
// arr[0] = "INDEX 0"
// console.log(arr);


////EMPTY OBJECT////
// var obj = {}

// obj.name = "ALI"



// console.log(obj);

var std = {
    id : 101,
    name : "Jaffar",
    batch : "BATCH DOSRA",
    age : 20
}

/////check prop in std obj/////

// var check = "age" in std
// console.log(check);


/////DELETE PROP IN STD.OBJECT//
// delete std.batch
// console.log(std);


///////array in object//////
// var student = {
//     id : 101,
//     name : "Sarim",
//     age : 16 , 
//     gender : "male",
//     class : "web & mobile",
//     courses : ["HTML" , "CSS", "JavaScript"]
// }

// student.marks = [80,60,90]
// console.log(student);

// console.log(student.courses[1])

            /////METHODS/////
    ////FUNCTIONS IN OBJECT/////

// var std = {
//         fname : "Ali",
//         lName: "khan",
//         age:15,
//         getName :function (name){
//             return this.lName
//         }         
// }

// console.log(std.getName("Jaffar"));



//     ////function expression///
// var foo = function(){

// }

// ////regular function///
// function foo(){

// }



var std = {
    name : "Bilal",
    courses : {
        html : 80,
        css : 60,
        js:70
    },
    ///METHOD///
    htmlMark : function(){
        return "css MARK" + " " +this.courses.css
    } 



}

console.log(std.htmlMark());








