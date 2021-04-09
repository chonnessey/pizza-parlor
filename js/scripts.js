// Business logic

function Pizza(topping, size, price) {
  this.pizzaTopping = topping;
  this.pizzaSize = size;
  this.price = price;
}

Pizza.prototype.GetPrice = function() {
  let sizeOfPizza = this.pizzaSize;
  let oneTopping = this.pizzaTopping;
  let priceOfPizza = 0;
  this.price = 0;
  if (sizeofPizza === "small" && oneTopping === "pepporoni") {
    priceOfPizza = 25;
  }
  return this.price += priceOfPizza;
}
console.log(priceOfPizza);







// UI logic 
$(document).ready(function() {
  $("#order").submit(function(event) {
    event.preventDefault();
    const topping = $("#topping").val();
    const size = $("#size").val();
    const priceOfPizza = 0;
  });
});