function fact(){
    var n=document.getElementById("num").value;
    let f=1;
    if(n==0 || n==1){
        f=1;
    }
    else if(n>1){
        for(var i=n;i>1;i--){
            f=f*i;
        }
    }
    else{
        f="number is negative"
    }
    document.getElementById("demo").innerHTML=f;
}
function pow(){
    var base=document.getElementById("base").value;
    var p=1;
    var exp=document.getElementById("exp").value;
    for(var i=0;i<exp;i++)
    {
        p=base*p;
    }
    document.getElementById("power").innerHTML=p;
}
function oddeven(){
    var n=document.getElementById("numb").value;
    var res;
    if(n%2==0){
        res="even";
    }
    else{ res="odd";}
    document.getElementById("res").innerHTML=res;
}