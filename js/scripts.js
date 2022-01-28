// Business Logic
function Pizza(size, pepperoni, cheese) {
  this.size = size;
  this.pepperoni = pepperoni;
  this.cheese = cheese;
  this.price = this.checkPrice();
}

function PizzaOrder() {
  this.pizzas = {}
  this.currentPizza = 0;
}

Pizza.prototype.checkPrice = function(){
  if (this.size === "Small"){
    return 11.45;
  } else if (this.size === "Medium"){
    return 12.95;
  } else {
    return 15.95;
  }
  }


function calculateTotal(pizza, total){
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
console.log("document ready")
$("#subtotal").text(0);
$("#tax").text(0);
$("#grand-total").text(0);
let total = 0;
  $("form#add-pizza").submit(function(event) {
    event.preventDefault();
    let sizeOfPizza = $("#size-of-pizza").val();
    let pepperoniTopping = $("#pepperoni-topping").val();
    let cheeseTopping = $("#cheese-topping").val();
    let pizza = new Pizza (sizeOfPizza, pepperoniTopping, cheeseTopping);
    console.log("button clicked");
    myPizzaOrder.addPizza(pizza);
    console.log(pizza);
    // let pizzaPrice = setPizzaPrice(pizza)
    $("#pizza-list").append("<li>" + sizeOfPizza + " Pizza -- $" + pizza.price + "</li>");
    total += pizza.price;

    $("#subtotal").text(total.toFixed(2));
    $("#tax").text((total * (.03)).toFixed(2));
    $("#grand-total").text((total + (total * (.03))).toFixed(2));
    console.log(total.toFixed(2))

  })
});