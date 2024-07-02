function generateOtp(){
    return Math.floor( (Math.random() * (9999 - 1000 + 1) + 1000));
}

console.log(`Here is your opt: ${generateOtp()}`);