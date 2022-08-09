/*
find the total product price from the array:
shoppingCart=[
    {name:'shoes',price:1200},
    {name:'shirt',price:1220},
    {name:'pant',price:2200},
    {name:'belt',price:600},
    {name:'mobile',price:20200},
]

*/
/*.................................................................................*/
shoppingCart = [
    { name: 'shoes', price: 1200 },
    { name: 'shirt', price: 1220 },
    { name: 'pant', price: 2200 },
    { name: 'belt', price: 600 },
    { name: 'mobile', price: 20200 },
]

function totalPrice(products) {
    let totalProductPrice = 0;
    for (let i = 0; i < products.length; i++) {
        let product = products[i];
        totalProductPrice += product.price;
    }
    return totalProductPrice;
}
const totalCost = totalPrice(shoppingCart);
console.log(totalCost);