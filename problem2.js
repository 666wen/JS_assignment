let menu = {
    width:200,
    height:300,
    title:"My menu"
};

function multiplyNumeric(obj){
    for (let x in obj){
        if(typeof obj[x] == "number"){
            obj[x]= obj[x]*2;
        }
    }

}

multiplyNumeric(menu);
document.getElementById("demo2").innerHTML ="The result of problem2 is: " +Object.values(menu);
