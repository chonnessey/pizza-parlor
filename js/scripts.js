// Business logic

function Pizza(toppings, size, price) {
  this.pizzaToppings = toppings;
  this.pizzaSize = size;
  this.price = price;
}

Pizza.prototype.GetSize = function() {
  let sizeOfPizza = this.pizzaSize;
  let priceOfPizza = 0;
  this.price = 0;
}

Pizza.prototype.GetTopping









// UI logic 
$(document).ready(function() {
  $("#order").submit(function(event) {
    event.preventDefault();
    const topping = $("#topping").val();
    const size = $("#size").val();
    const priceOfPizza = 0;
  });
});