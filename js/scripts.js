// Business logic

function Pizza(toppings, size,) {
  this.pizzaToppings = toppings;
  this.pizzaSize = size;
}

Pizza.prototype.GetPrice = function(priceOfPizza) {
  let sizeOfPizza = this.pizzaSize;
  let chosenToppings = this.pizzaToppings;
  let priceOfPizza = 0;
  // determine the size of pizza chosen by user.
  if(sizeOfPizza === size && chosenToppings === toppings) {
    priceOfPizza = 10;
    return priceOfPizza;
  }
  
  // determine price of pizza depending on user input for toppings and size.
}



let myPizza = new Pizza(0, GetPrice);












// UI logic 
$(document).ready(function() {
  $("#order").submit(function(event) {
    event.preventDefault();
    const chosenToppings = $("#topping1", "#topping2", "#topping3").val();
    // const topping2 = $("#topping2").val();
    // const topping3 = $("#topping3").val();
    const sizeOfPizza = $("#size").val();
    const priceOfPizza = 0;
  });
});