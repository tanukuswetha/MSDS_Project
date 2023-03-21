function validate(){
    var uname=document.getElementById("uname").value;
    var pwd=document.getElementById("pwd").value;
    if (uname==''){
        alert("Enter Username!!");
    }
    else if(pwd==''){
        alert("Enter Password!!");
    }
}