// Business logic

function Pizza(topping1, topping2, topping3, size) {
  this.topping1 = topping1 
  this.topping2 = topping2 
  this.topping3 = topping3
  this.pizzaSize = size;
  this.price = 0;
}
console.log("small, 3 toppings", this.price)


// Pizza.prototype.getPrice = function() {
//   if (this.pizzaSize )
// }


















// UI logic 
$(document).ready(function() {
  $("#order").submit(function(event) {
    event.preventDefault();
  });
});