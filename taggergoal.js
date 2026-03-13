
const products = [
  { name: "Apple", price: 30 },
  { name: "Banana", price: 20 },
  { name: "Milk", price: 50 },
  { name: "Bread", price: 40 }
];

// Function to generate price tags
function priceTagger(items) {
  items.forEach(item => {
    console.log(`Item: ${item.name} | Price Tag: ₹${item.price}`);
  });
}
priceTagger(products);
