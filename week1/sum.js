sum = (x,y) => {
    if(!(typeof x === "number" && typeof y === "number")){
        throw new TypeError("grqshka");
    }
    return x + y ;
}

concat = (str1,str2) => {
    if(!(typeof str1 === "string" && typeof str2 === "string")){
        throw new TypeError("grqshka");
    }
    return str1 + str2 ;
}

console.log(sum(2,3));
console.log(sum("edno","edve"));
console.log(concat(2,3));
console.log(concat("xgonna","give"));