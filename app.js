// //step-1
// const smartPhone = {
//   name: "I phone 12 pro",
//   price: 120000,
//   quantity: 2,

//   totalPrice: function () {
//     const total = this.price * this.quantity;
//     console.log(`Total price of ${this.quantity} ${this.name} ${total}`);
//   },
// };
// smartPhone.totalPrice();

// //step-2 Factory pattern
// function headPhone(name, price, quantity) {
//   return {
//     name,
//     price,
//     quantity,

//     totalPrice: function () {
//       const total = this.price * this.quantity;
//       console.log(`Total price of ${this.quantity} ${this.name} ${total}`);
//     },
//   };
// }

// console.log(headPhone("headphone", 500, 5));

// //step-3 Constructor pattern
// function Product(name, price, quantity) {
//   this.name = name;
//   this.price = price;
//   this.quantity = quantity;

//   this.totalPrice = function () {
//     const total = this.price * this.quantity;
//     console.log(`Total price ${this.quantity} ${this.name} ${total}`);
//   };
// }
// const result = new Product('earphone',350,4);
// console.log(result);
// const result1 = new Product('Monitor',17500,1);
// console.log(result1);

// function Add(a, b) {
//   this.a = a;
//   this.b = b;
//   const sum = function () {
//     return this.a + this.b
//   }.bind(this);
//   this.calculator=function(){
//     console.log(sum);
//   }
  
// }
// const cal1 =new Add(20,10);
// console.log(cal1);

const num = {
  a:10,
  b:20
}
function sum(c){
  console.log(this.a + this.b + c);
}
sum.call(num,30)