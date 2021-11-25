// var error =document.getElementById("error");
var error1 =document.getElementById("error1");
var exampleInputEmail1=document.getElementById("exampleInputEmail1");
var exampleInputPassword1=document.getElementById("exampleInputPassword1");

function validation(myfunction){
    
  
    if(exampleInputEmail1.value=="" || exampleInputEmail1.value!="admin" || exampleInputPassword1.value=="" || exampleInputPassword1.value!="12345" ){
        alert("Email Is incorrect")

        error1.innerHTML="Incorrect Email or Password"
        error1.style.color="red"
        return false;
        }
        
   else if(exampleInputEmail1.value=="admin" && exampleInputPassword1.value=="12345")
   {
       myfunction()
   }
}

function myfunction(){
   
    return true;
}

