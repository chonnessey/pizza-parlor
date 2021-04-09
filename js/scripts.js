// Business logic

function Pizza(topping, size) {
  this.pizzaTopping = topping;
  this.pizzaSize = size;
}

Pizza.prototype.GetPrice = function(price) {
  
}






// UI logic 
$(document).ready(function() {
  $("#order").submit(function(event) {
    event.preventDefault();
    const topping = $("#topping").val();
    const size = $("#size").val();
  });
});