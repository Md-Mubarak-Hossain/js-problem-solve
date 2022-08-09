/*
find the total product price from the array:
shoppingCartWithQuantity=[
    {name:'shoes',price:1200,quantity:3},
    {name:'shirt',price:1220,quantity:5},
    {name:'pant',price:2200,quantity:6},
    {name:'belt',price:600,quantity:2},
    {name:'mobile',price:20200,quantity:1},
]
....................................................................................
Output:44300
*/
/*.................................................................................*/
shoppingCartWithQuantity = [
    { name: 'shoes', price: 1200, quantity: 3 },
    { name: 'shirt', price: 1220, quantity: 5 },
    { name: 'pant', price: 2200, quantity: 6 },
    { name: 'belt', price: 600, quantity: 2 },
    { name: 'mobile', price: 20200, quantity: 1 },
]
function totalPrice(products) {
    let totalProductPrice = 0;
    for (let i = 0; i < products.length; i++) {
        let product = products[i];
        let productPrice = product.price;
        let productQuantity = product.quantity;
        totalProductPrice += productPrice * productQuantity;
    }
    return totalProductPrice;

}
let totalBill =
    totalPrice(shoppingCartWithQuantity);
console.log(totalBill);