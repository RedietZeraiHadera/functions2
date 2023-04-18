// Create an array containing the names of all items in the inventory maximum of 10.

let groceries = ["apples", "bananas", "mangos", "papaya", "strawberries", "avocado", "milk", "orange"];

//Create a separate array with the corresponding stock quantities of each item maximum of 10.
let amount = [20, 15, 30, 25, 40, 10, 20, 15];

//Write a function to add a new item to the inventory, updating both arrays.

function addGrocery(newGrocery, quantity) {
    if (groceries.length < 10) {
      groceries.push(newGrocery);
      amount.push(quantity);
      console.log(`Added ${quantity} ${newGrocery}`);
    } else {
      console.log("groceries can't be more than 10.");
    }
  }
  addGrocery("tomato paste", 50); 
//Write a function to update the stock quantity of an existing item.
//Write a function to calculate the total number of items in the inventory.
function calculateTotal() {
    let total = 0;
    for (let i = 0; i < amount.length; i++) {
      total += amount[i];
    }
    return total;
}
    const total = calculateTotal();
console.log(`There is a total ${total} of stock `);

//Write a function to find the item with the lowest stock quantity.
function lowestStock() {
    let lowestStock = amount[0];
    let lowestStockIndex = 0;
    for (let i = 1; i < amount.length; i++) {
        if (amount[i] < lowestStock) {
            lowestStock = amount[i];
            lowestStockIndex = i;
          }
        }
      
        return amount[lowestStockIndex];
    }
    console.log("The lowest stock amount is for", lowestStock());          

