function uniqueCharectersCheck (name){
    const nameSet = new Set(name);

    if(name.length == nameSet.size) console.log("The input string contains unique charecter");
    else console.log("The input string contains duplicates");

    return 0;
}

uniqueCharectersCheck("Mithun");
uniqueCharectersCheck("anurag");


