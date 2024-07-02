const students = [
    {
        name : "Mithun",
        marks : 95
    },
    {
        name : "Prabir",
        marks : 75
    },
    {
        name: "Alka",
        marks : 92
    },
    {
        name: "Shivam",
        marks: 70
    },
    {
        name : "Farman",
        marks : 99
    }
]

function checkResult(user){
    for(let i = 0; i < students.length; i++){
        if(students[i].name == user && students[i].marks >= 90){
            console.log(`Congratulatons ${user}! You have cleared the exam`);
        }
        else if(students[i].name == user && students[i].marks < 90){
            console.log(`sorry ${user}! You have not passed the exam`);
        }
        else{
            console.log("Invalid User");
        }
    }
}

checkResult("Mithun")