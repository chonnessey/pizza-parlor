// Business logic

function Pizza(toppings, size,) {
  this.pizzaToppings = toppings;
  this.pizzaSize = size;
}

Pizza.prototype.GetPrice = function() {
  let sizeOfPizza = this.pizzaSize;
  let chosenToppings = [];
  let priceOfPizza = 0;
  this.pizzaToppings.forEach(function(topping) {
    chosenToppings.push(topping)
  });
  console.log(Pizza.GetPrice.chosenToppings);
  // determine price of pizza depending on user input for toppings and size.
}












// UI logic 
$(document).ready(function() {
  $("#order").submit(function(event) {
    event.preventDefault();
    const topping1 = $("#topping1").val();
    const topping2 = $("#topping2").val();
    const topping3 = $("#topping3").val();
    const sizeOfPizza = $("#size").val();
    const priceOfPizza = 0;
    let chosenToppings = [];
  });
});