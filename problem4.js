function truncate(str, maxlength){
    let l = str.length;
    if(l>maxlength){
        let part = str.slice(0,maxlength);
        return part+"...";
    }
    else{
        return str;
    }
}

let ans=truncate("What I'd like to tell on this topic is:", 20);
document.getElementById("demo4").innerHTML=ans;