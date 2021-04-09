// Business logic

function Pizza(topping, size, price) {
  this.pizzaTopping = topping;
  this.pizzaSize = size;
  this.price = price;
}
console.log(priceOfPizza);
Pizza.prototype.GetPrice = function() {
  let sizeOfPizza = this.pizzaSize;
  let priceOfPizza = 0;
  this.price = 0;
  switch(sizeOfPizza) {
    case "small":
      priceOfPizza = 10;
      break;
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