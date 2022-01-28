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

let pizza1 = new Pizza("Medium", "Pepperoni", "No Cheese");
let myPizzaOrder = new PizzaOrder(pizza1);





// User Interface