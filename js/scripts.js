// Business logic

function Pizza(topping1, topping2, topping3, size) {
  this.topping1 = topping1;
  this.topping2 = topping2; 
  this.topping3 = topping3;
  this.pizzaSize = size;
  this.price = 0;
}

Pizza.prototype.getPrice = function() {
  if (this.pizzaSize === "small") {
    this.price += 15;
  } else if (this.pizzaSize === "medium") {
    this.price += 20;
  } else if (this.pizzaSize === "large") {
    this.price += 25;
  }
  if (this.topping1 === "topping1") {
    this.price += 2;
  } else {
    this.price += 0;
  }
  if (this.topping2 === "topping2") {
    this.price += 2;
  } else {
    this.price += 0;
  }
  if (this.topping3 === "topping3") {
    this.price += 2;
  } else {
    this.price += 0;
  }
  return this.price;
}

// UI logic 
$(document).ready(function() {
  $("#order").submit(function(event) {
    event.preventDefault();
    const topping1 = $("#topping1").val();
    const topping2 = $("#topping2").val();
    const topping3 = $("#topping3").val();
    const mySize = $("#size").val();
    let myPizza = new Pizza(topping1, topping2, topping3, mySize);
    myPizza.getPrice();
    $("#results").text(myPizza.price);
  });
});