const products = [
    {name : "Laptop", price: 120000}, 
    {name: "Mobile", Price: 70000}, 
    {name: "Laptop bag", price: 20000},
    {name: "Watch", price: 20000},
    {name: "Mobile charger", price: 1500}
]

function maxMinPrice(productarr){
    let max = productarr[0]; // max and min are objects
    let min = productarr[0];

    for(let i = 0; i < productarr.length; i++){
        if(productarr[i].price > max.Price){
            max = productarr[i];
        }

        if(productarr[i].price < min.price){
            min = productarr[i];
        }

        else continue;
    }
    return [max, min];
}

let maxMinArr = maxMinPrice(products);


console.log(`The product with maximum amount is ${maxMinArr[0].name} which is priced at RS. ${maxMinArr[0].price}`);
console.log(`The product with minimum amount is ${maxMinArr[1].name} which is priced at RS. ${maxMinArr[1].price}`);

