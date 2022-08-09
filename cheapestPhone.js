/*
find the cheapest phone  from the array:
shoppingCart=[
    {name:'walton',price:20000},
    {name:'xaomi',price:20020},
    {name:'itel',price:10000},
    {name:'nokia',price:1600},
    {name:'iphone',price:60200},
]
....................................................................................
Output:25420
*/
/*.................................................................................*/

// problem not solve
shoppingCart = [
    { name: 'walton', price: 20020 },
    { name: 'xaomi', price: 20000 },
    { name: 'iphone', price: 60200 },
    { name: 'nokia', price: 1600 },
    { name: 'itel', price: 10000 },
];
function cheapestPhone(phones) {
    let cheapest = phones[0];
    for (let i = 0; i < phones.length; i++) {
        let cheapPhon = phones[i];
        if (cheapest.price < cheapPhon.price) {
            let cheap = cheapest;
            console.log(cheap);
        }
        // console.log(cheapest);
    }
}
const mySelection = cheapestPhone(shoppingCart);
// console.log(mySelection);
