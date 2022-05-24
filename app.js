//Object Literal with method
// const rect = {
//   width:100,
//   height:50,

//   draw:function(){
//     console.log(`i am a rectangle`);
//     this.printProperties();
//   },
//   printProperties :function(){
//     console.log(`My width is ${this.width}`);
//     console.log(`My height is ${this.height}`);
//   }
// }
// rect.draw();

//Cerate class using Factory pattern
//the clean code without repeat
// function createRect(width, height) {
//   return {
//     width,
//     height,

//     draw: function () {
//       console.log("Hello I am Rectangle");
//       this.printProperties();
//     },

//     printProperties: function () {
//       console.log(`My width is ${this.width}`);
//       console.log(`My height is ${this.height}`);
//     },
//   };
// }
// const rect1 = createRect(200, 40);
// rect1.draw();
// const rect2 = createRect(300, 50);
// rect2.draw();

//Cerate class using Constructor pattern
// function Rectangle(width, height) {
//   this.width = width;
//   this.height = height;

//   this.draw = function () {
//     console.log("Hello I am Rectangle");
//     this.printProperties();
//   };
//   this.printProperties = function () {
//     console.log(`My width is ${this.width}`);
//     console.log(`My height is ${this.height}`);
//   };
// }

// const rect3 = new Rectangle(200, 70);
// console.log(rect3);
// console.log(rect3.draw());

//Another Constructor function
// function Product(name, price, quantity) {
//   this.name = name;
//   this.price = price;
//   this.quantity = quantity;

//   this.totalPrice = function () {
//     return (total = this.price * this.quantity);
//   };
// }

// const product1 = new Product("Samsung", 14500, 3);
// console.log(product1);

// Constructor function
// const product1 = new Function(
//   'name',
//   'price',
//   'quantity',
//   `
// this.name = name;
//   this.price = price;
//   this.quantity = quantity;

//   this.totalPrice = function () {
//     return (total = this.price * this.quantity);
//   };
// `
// );
// const product2 = new product1("Samsung", 14500, 3);
// console.log(product2.totalPrice());


//call,apply,bind

function myFunc(c,d){
  console.log(this.a + this.b + c + d);
}

// myFunc.call({a:20,b:30},5,20);
// myFunc.apply({a:20,b:30},[5,20]);

const result = myFunc.bind({a:20,b:30});
result(5,20);