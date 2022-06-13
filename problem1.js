let salaries = {
    John:100,
    Ann:160,
    Pete:130
};

let sum=0;
for(let x in salaries){
sum+=salaries[x]; //salaries.p  -->p can not be a variable??
};

//let sum1=salaries.John+salaries.Ann+salaries.Pete;
//document.getElementById("demo1").innerHTML = sum1;
//document.getElementById("demo1").innerHTML = Object.values(salaries);
document.getElementById("demo1").innerHTML = "The result of problem1 is: " +sum;