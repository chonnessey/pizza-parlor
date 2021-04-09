// Business logic

function Pizza(topping, size) {
  this.pizzaTopping = topping;
  this.pizzaSize = size;
}

Pizza.prototype.GetPrice = function() {
  if ("#topping" && "#size" === pepporoni && small) {
    return 10.00;
  }
  console.log(this.GetPrice);
}






// UI logic 
$(document).ready(function() {
  $("#order").submit(function(event) {
    event.preventDefault();
    const topping = $("#topping").val();
    const size = $("#size").val();
  });
});