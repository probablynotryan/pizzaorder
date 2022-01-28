
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

Describe PizzaOrder.prototype.addPizza  

Test: "This should add a Pizza object to the PizzaOrder object with a currentPizza property of '1'."  
Code: myPizzaOrder.addPizza(pizza1)  
Expected Output: "myPizzaOrder = {{pizza1}, 1}

---

Describe PizzaOrder.prototype.assignID  

Test: "This should add '1' to the pizza count whenever a Pizza object is added to the PizzaOrder object."  
Code: myPizzaOrder.assignID()  
Expected Output: "myPizzaOrder = {{}, 1}"

---

Describe PizzaOrder()  

Test: "This should create a object containing an empty object for pizzas and a count."  
Code: let myPizzaOrder = new PizzaOrder();
Expected Output: "myPizzaOrder = {{}, 0}"

 ---

 Describe: Pizza()  

Test: "It should create an object with pepperoni, cheese, and size properties."  
Code: let pizza1 = New Pizza("Medium", "Pepperoni", "No Cheese")  
Expected Output: "pizza1 = {"Medium", "Pepperoni", "No Cheese"}
 

## Known Bugs

None reported.
  

## License

MIT

  

Copyright 2022 (c) Ryan Bass (github.com/probablynotryan)