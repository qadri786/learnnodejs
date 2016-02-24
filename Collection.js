// indexed array
var box = [
  "Hello","World"
];
//
// var qty = box.length;
// var  i = 0;
//
// while (i < qty){
// console.log(box[i]) ;
// }

// now use foreach
//
// for(var item in box){
//   console.log(box[item]);
// }
/// end

// Accociated array -> key=<val
//  var boxNamed = {
//   "name":"shumail",
//   "email":"shumail@example.com"
// };
//
// for(var item in boxNamed){
//   console.log(item + ": " + boxNamed[item]);
// }
// // end
// // data Table
// var table = [
//   {"name":"shakir"},
//   {"name":"shumail"},
//   {"email":"abc@xyz.com"},
//   {"email":"abc@xyz.com"}
// ];
//
//
// for (var item in table){
//   console.log(table[item]["email"])
// }

// Object / duck typing

var obj = {
  name:"Hello from object",
  getName:function(name){
    return name;
  },
  getResult:function(num1,num2){
    return num1 + num2;
  }
};

console.log(obj);

console.log(obj.name);
console.log(obj.getName("Shumail"));
console.log(obj.getResult(2,2));
