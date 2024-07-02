const arr = ["Dhruba", "Mithun", "Champa", "Shampa"];

function isPresent(user){
    let index = arr.indexOf(user);

    if(index === -1){
        console.log(`No, ${user} is not a valid user`);
    }

    else{
        console.log(`Yes, ${user} is a  valid user`);
    }
}

isPresent("Dhruba");
isPresent("Someone");