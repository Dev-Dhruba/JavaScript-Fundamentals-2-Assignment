function calculateTotalCartValue(){ // Using array like object argument
    let sum = 0;

    for(let i = 0; i < arguments.length; i++){
        sum += arguments[i];
    }

    console.log(`The total cart valur is ${sum}`);
}

function calculateTotalCartValue2(...price){ // using rest parameter

    let sum = 0;

    for(let i = 0; i < price.length; i++){
        sum += price[i];
    }

    console.log(`The total cart value is ${sum}`);
}

calculateTotalCartValue2(10, 20, 30, 40, 50);
calculateTotalCartValue(1, 2, 3, 4, 5)