// console.log("hello class");

// function Std(name,age,gender){
//     this.name = name;
//     this.age = age;
//     this.gender = gender
// }

// var std1 = new Std("Jaffar" , 20 , "male");
// var std2 = new Std("Sarim" , 20 , "male");

// console.log(std1);
// console.log(std2);

/////PROTOTYPE IN OBJ////

// function Std(name,age,gender){
//     this.name = name;
//     this.age = age;
//     this.gender = gender

// }

// Std.prototype.getName = function(){
//         return this.name
// }

// var std1 = new Std("Jaffar" , 20 , "male");
// var std2 = new Std("Sarim" , 20 , "male");
// console.log(std1);

// // console.log(Std.hasOwnProperty("name"));

// function Std(name,age){
//     this.name = name
//     this.age = age

// }

// Std.prototype.getName = function(){
//     return this.age
// }

// var std1 = new Std("Jaffar" , 20)
// console.log(std1.getName());

var obj = {
  name: "Sarim",
  age: 16,
  gender: "male",
  batch: "Batch 2",
};

///for in loop ///

// for(var prop in obj  ){
//     console.log(prop , obj[prop]);
// }
// var num = 250.21465
// console.log((num).toFixed(2));

//////WINDOWS METHOD IN JS ////

function pageChg() {
  // window.location.href = "about.html"

  // window.location.assign("about.html")

  // window.location.reload()

  // console.log(window.location.href);

  var p = "<p>asjgafkjasdhfkjasjfasljhfaj</p>";

  // window.open("about.html", "win1" , "width:100px,height:100px")

  // window.close()
}

// function Std(id,name,age,){
//     this.id = id
//     this.name = name
//     this.age = age
// }

// var std1 = new Std(101,"ali",20)
// var std2 = new Std(102,"jaffar",20)
// console.log();

// if(std1.name){
//     console.log();
// }

var userArr = [
  {
    id: 101,
    name: "ali",
    age: 20,
  },
  {
    id: 102,
    name: "jaffar",
    age: 22,
  },
];


function show(){
    
    var flag = false
    var getId = +(document.getElementById("input").value)
    console.log(getId);
    for(var i=0 ; i<userArr.length ; i++){
        if(userArr[i].id == getId){
            console.log("done");
            document.write("<li>"+userArr[i].name +"</li>"+"<li>"+userArr[i].age +"</li>")
            // flag = true
        }
        else{
            console.log("error");
        }
    }
    // if(flag == true){
    //     // 
    // }
}
