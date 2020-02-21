concat = (str1,str2) => {
    if(!(typeof str1 === "string" && typeof str2 === "string")){
        throw new TypeError("grqshka");
    }
    return str1 + str2 ;
}

console.log(concat("xgonna","give"));
console.log(concat(2,3));
