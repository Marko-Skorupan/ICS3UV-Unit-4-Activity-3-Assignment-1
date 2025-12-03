/**
 * @author Makro Skorupan
 * @version 1.0.0
 * @date 2025-12-02
 * @fileoverview This program simulates a shopping cart. It stores item names and prices in arrays,
 * calculates the subtotal, applies a discount if needed, adds HST, and outputs the final totals.
 */

const itemNames: string[] = new Array(100);
const itemPrices: number[] = new Array(100);

const numberOfItems: number = Number(
  prompt("How many items are you purchasing?"),
);

let subtotal: number = 0;
let discount: number = 0;
let hst: number = 0;
let total: number = 0;

for (let i = 0; i < numberOfItems; i++) {
  const name = prompt("Enter the name of item " + (i + 1)) || "";
  itemNames[i] = name;

  const price = Number(prompt("Enter the price of " + name) || "0");
  itemPrices[i] = price;

  subtotal += price;
}

// Check for discount
if (subtotal > 350) {
  discount = subtotal * 0.10;
}

subtotal = subtotal - discount;
hst = subtotal * 0.13;
total = subtotal + hst;

// Display results
console.log("Your shopping cart includes: ");

let output = "";
for (let i = 0; i < numberOfItems; i++) {
  output += itemNames[i];
  if (i < numberOfItems - 1) {
    output += ", ";
  }
}

console.log(output);
console.log(
  "The total amount of items in your shopping cart is " + numberOfItems,
);
console.log("The subtotal is $" + subtotal.toFixed(2));
console.log("You are eligible for a discount of $" + discount.toFixed(2));
console.log("The HST is $" + hst.toFixed(2));
console.log("The total is $" + total.toFixed(2));
console.log("\nDone.");
