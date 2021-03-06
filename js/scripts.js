// Business Logic
function Pizza(size, pepperoni, cheese, goldfish) {
  this.size = size;
  this.pepperoni = pepperoni;
  this.cheese = cheese;
  this.goldfish = goldfish;
  this.price = this.checkPrice();
}

function PizzaOrder() {
  this.pizzas = {};
  this.currentPizza = 0;
}

Pizza.prototype.checkPrice = function() {
  let currentPizzaPrice = 0;
  if (this.size === "Small"){
    currentPizzaPrice += 11.45;
  } else if (this.size === "Medium"){
    currentPizzaPrice += 12.95;
  } else if (this.size === "Large"){
    currentPizzaPrice += 15.95;
  } else {
    currentPizzaPrice += 18.95;
  }
  if (this.pepperoni === "Add Pepperoni") {
    currentPizzaPrice += 1;
  } else if (this.pepperoni === "Extra Pepperoni") {
    currentPizzaPrice += 2;
  } else {
    currentPizzaPrice += 0;
  }
  if (this.cheese === "Extra Cheese"){
    currentPizzaPrice += 1;
  } else {
    currentPizzaPrice += 0;
  }
  if (this.goldfish === "Extra Goldfish"){
    currentPizzaPrice += 13.10;
  } else {
    currentPizzaPrice += 5.20;
  }
  return currentPizzaPrice;
  }

function calculateTotal(pizza, total) {
  total += setPizzaPrice(pizza);
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
$("#subtotal").text(0);
$("#tax").text(0);
$("#grand-total").text(0);
let total = 0;
  $("form#add-pizza").submit(function(event) {
    event.preventDefault();
    let sizeOfPizza = $("#size-of-pizza").val();
    let pepperoniTopping = $("#pepperoni-topping").val();
    let cheeseTopping = $("#cheese-topping").val();
    let goldfishTopping = $("#goldfish-crackers-topping").val();
    let pizza = new Pizza (sizeOfPizza, pepperoniTopping, cheeseTopping, goldfishTopping);
    myPizzaOrder.addPizza(pizza);
    $("#order-list-pizza").append("<li><img src='/img/small-pizza.jpg' alt='Pizza icon' id='pizza-icon'> " + pizza.size + " Pizza <br>(" + pizza.cheese + ", " + pizza.pepperoni + ", " + pizza.goldfish + ") </li>");
    $("#order-list-price").append("<li> $" + pizza.price.toFixed(2) + "</li><br>");
    total += pizza.price;
    $("#subtotal").text(total.toFixed(2));
    $("#tax").text((total * (.07654321)).toFixed(2));
    $("#grand-total").text((total + (total * (.07654321))).toFixed(2));
  });
});