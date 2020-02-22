var str = "A function is a function with a very functional function !"

wordsHistogram = str => {
    return str.split(/\s+/).reduce((total, word) => {
        total[word] ? total[word]++ : total[word] = 1;
        return total
    }, {})
};
    

console.log(wordsHistogram(str));