function wordCounter(sentence){
    const sentenceArr = sentence.split(" ")
    const sentenceSet = new Set(sentenceArr);
    const sentaceArrReduced = Array.from(sentenceSet);
    const result = new Map();

    for(let i = 0; i < sentaceArrReduced.length; i++){
        let count = 0;
        for(let j = 0; j < sentenceArr.length; j++){
            if(sentaceArrReduced[i] === sentenceArr[j]) count++;
        }
        result.set(sentaceArrReduced[i],count);
    }

    return result;
}


const sentence = "please please submit your assignment on time, your assignments are important";
const result = wordCounter(sentence);
console.log(result);
