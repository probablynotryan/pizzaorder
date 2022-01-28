
# Domin-oh-look-objects Pizza

#### By Ryan Bass (theryanbass@gmail.com)

### This is our four project with Epicodus, demonstrating familiarness with objects and constructors.

## Technologies Used

* HTML
* CSS
* Javascript  
  
## Description
This webpage takes a pizza order from the user calculates the final cost of the pizza! More information on the way (still in development).


### Setup/Installation Requirements
* TBA

 ### Tests  

Describe calculateTotal()  

Test: "This should add the current pizza's price to the current total."  
Code: let total = 11.45;
      let pizza = {"Small", "Cheese", "Pepperoni", 11.45};
      calculateTotal(pizza, total);  
Expected Output = 'total = 22.90'

----

Describe Pizza.prototype.checkPrice()

Test: "This should add 13.45 to the price property if the pepperoni property is 'Extra Pepperoni' and the size property is 'Small'.  
Code: let pizza = New Pizza ("Small", "Cheese", "Extra Pepperoni")  
pizza.checkPrice();  
Expected Output = 'pizza = {size: "Small", cheese: "Cheese", pepperoni: "Extra Pepperoni", price: 13.45}'

Test: "This should add a price property of 11.45 if the size property is "Small".  
Code: let pizza = New Pizza ("Small", "Cheese", "No Pepperoni");
pizza.checkPrice();
Expected Output = 'pizza {size: "Small", cheese: "Cheese" pepperoni: "No Pepperoni", price: 11.45}'


---

Describe PizzaOrder.prototype.addPizza()

Test: "This should add a Pizza object to the PizzaOrder object with a currentPizza property of '1'."  
Code: myPizzaOrder.addPizza(pizza1)  
Expected Output: "myPizzaOrder = {pizzas:{pizza1}, currentID: 1}"

---

Describe PizzaOrder.prototype.assignID()  

Test: "This should add '1' to the currentID whenever the assignID prototype is called."  
Code: myPizzaOrder.assignID()  
Expected Output: "myPizzaOrder = {pizzas: {}, currentID: 1}"

---

Describe PizzaOrder()  

Test: "This should create a object containing an empty object for pizzas and a currentID property of 0."  
Code: let myPizzaOrder = new PizzaOrder();
Expected Output: "myPizzaOrder = "{pizzas: {}, currentID: 0}"

 ---

 Describe: Pizza()  

Test: "It should create an object with size, pepperoni, cheese and price properties."  
Code: let pizza1 = New Pizza("Medium", "Pepperoni", "No Cheese", 0)  
Expected Output: 'pizza1 = {size: "Medium", Pepperoni: "Pepperoni", Cheese: "No Cheese", Price: 0}'
 

## Known Bugs

None reported.
  

## License

MIT

  

Copyright 2022 (c) Ryan Bass (github.com/probablynotryan)