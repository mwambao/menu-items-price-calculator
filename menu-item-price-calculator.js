/*
Menu items price calculator

Create a class which will allow you to work out the combined price of a number of
items, and interact with it to work out the total cost of different orders.

1. Create a class that contains the prices of two menu items as private field
declarations.

2. Use the constructor in the class to get the argument values (how many of
each item are being bought).

3. Create a method to calculate and return the total cost depending on how
many of each item the user selects.

4. Use a getter property to grab the value output by the calculation method.

5. Create two or three objects with different combinations of menu selections,
and output the total cost in the console.
*/

class Prices {
    //private filed declarations
    #price1 = 10;
    #price2 = 20;

    constructor(quantity1, quantity2){
        this.quantity1 = quantity1;
        this.quantity2 = quantity2;
    }

    //using getter property to get value from calculation
    get totalCost(){
        return (this.quantity1 * this.#price1) + (this.quantity2 * this.#price2);
    }
}

let p = new Prices(2, 7);
console.log(p.totalCost); // 160 i.e. (2 * 10) + (7 * 20) = 20 +140

let w = new Prices(1, 1);
console.log(w.totalCost); // 30 i.e. (1 * 10) + (1 * 20) = 10 + 20