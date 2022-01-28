// Business Logic
function Pizza(size, pepperoni, cheese) {
  this.size = size;
  this.pepperoni = pepperoni;
  this.cheese = cheese;
}

function PizzaOrder() {
  this.pizzas = {}
  this.currentPizza = 0;
}

PizzaOrder.prototype.addPizza = function (pizza) {
  pizza.id = this.assignID();
  this.pizzas[pizza.id] = pizza;
}

PizzaOrder.prototype.assignID = function () {
  this.currentPizza += 1;
  return this.currentPizza;
}

let myPizzaOrder = new PizzaOrder();

// User Interface

$(document).ready(function() {
console.log("document ready")

  $("form#add-pizza").submit(function(event) {
    event.preventDefault();
    let sizeOfPizza = $("#size-of-pizza").val();
    let pepperoniTopping = $("#pepperoni-topping").val();
    let cheeseTopping = $("#cheese-topping").val();
    let pizza1 = new Pizza (sizeOfPizza, pepperoniTopping, cheeseTopping);
    console.log("button clicked");
    myPizzaOrder.addPizza(pizza1);
  })
});