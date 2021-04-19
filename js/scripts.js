// Business logic

function Pizza(topping1, topping2, topping3, size) {
  this.topping1 = topping1;
  this.topping2 = topping2; 
  this.topping3 = topping3;
  this.pizzaSize = size;
  this.price = 0;
}
console.log("small", this.price)


Pizza.prototype.getPrice = function() {
  if (this.pizzaSize === "small") {
    this.price += 15;
  } else if (this.pizzaSize === "medium") {
    this.price += 20;
  }
  return this.price;
}
console.log("Large", this.price)



// UI logic 
$(document).ready(function() {
  $("#order").submit(function(event) {
    event.preventDefault();
    const topping1 = parseInt($("#topping1").val());
    const topping2 = parseInt($("#topping2").val());
    const topping3 = parseInt($("#topping3").val());
    const mySize = parseInt($("#size").val());
    let myPizza = new Pizza(mySize, topping1, topping2, topping3);
    myPizza.getPrice();
    $("#results").text(myPizza.price);
  });
});