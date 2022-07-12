var nam,mail,mobile,country,dd,account,acc,ser,cost;
function validate(){
    if (nam==true & mail==true & mobile==true & (dd==true | account==true) ){
        return true;
    }
    else{
        return false;
    }
}
function check(a,b){
    if (!b.test(a.value) & a.value!=""){
        a.style.backgroundColor="red";
        if (a.name=="user"){
            nam=false;
        }
        else if(a.name=="mail"){
            mail=false;
        }
        else if(a.name=="mobile"){
            mobile=false;
        }
        else if(a.name=="account"){
            account==false;
        }
        else if(a.name=="dd"){
            dd=false;
        }
    }  
    else{
        a.style.backgroundColor="white";
        if (a.name=="user"){
            nam=true;
        }
        else if(a.name=="mail"){
            mail=true;
        }
        else if(a.name=="mobile"){
            mobile=true;
        }
        else if(a.name=="account"){
           account=true;
        }
        else if(a.name=="dd"){
            dd=true;
        }
        
    }
}
function fore(n){
   
   if (n.value=="india" | n.value=="none"){
    document.getElementById("app").style.display="none";
   }
   else{
    document.getElementById("app").style.display="block";
   }
}
function cal(x){
   
    var a=document.forms[0]["accom"].value;
   if (a=="kadapa" | a=="nuzvid"){
        document.getElementById("cost").value=x.value*2000;
   }
   else if(a=="isklm" | a=="ongole"){
    document.getElementById("cost").value=x.value*3000;
   }
   else{
    document.getElementById("cost").style.backgroundColor='red';
   }


}
var v=0;
function bg(){
    if(v>=5){
        v=0;
    }
    document.body.style.backgroundImage='url("jn'+v+'.jpg")';
    v++;
    setTimeout(bg,3000);
}
bg();


