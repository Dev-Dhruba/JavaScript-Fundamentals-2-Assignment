function calculateRemainingDays(eventDate){
    let eventDateObj = new Date(eventDate);
    let timeNowObj = Date.now();

    let dayDifferece = Math.round(((eventDateObj - timeNowObj) /(1000 * 60 * 60 * 24)));

    return dayDifferece;
}


const eventDate = "2024-08-31";
const daysRemaining = calculateRemainingDays(eventDate);
console.log(`${daysRemaining} days are remaining for the event`);

