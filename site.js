'use strict';

var submit = document.getElementById("Btn-submit");


var nameCheck = document.querySelector('.name-massage')

var phoneCheck = document.querySelector('.phone-massage')

var emailCheck = document.querySelector('.email-massage')

var pswCheck = document.querySelector('.passwor-massage')


var pswrCheck = document.querySelector('.repeatPasswor-massage')



var nameInput = document.querySelector('#name');

var phoneInput = document.querySelector('#Phone');

var emailInput = document.querySelector('#email');

var pswInput = document.querySelector('#psw');

var pswrInput = document.querySelector('#pswr');

submit.onclick = function () {

    //Name inputs
    if (nameInput.value.length < 10) {
        nameCheck.innerHTML = "It should be 10 letters or more !";
    } else {
        nameCheck.innerHTML = "";
    }


    //Phone Input
    if (phoneInput.value.length !== 10) {
        phoneCheck.innerHTML = "It should be 10 numbers for the phone !";
    } else {
        phoneCheck.innerHTML = "";
    }


    //email inputs


    if (emailInput.value.search("@") == -1) {

        emailCheck.innerHTML = "Your email is not correct ! use@";

    } else {

        emailCheck.innerHTML = "";

    }


    // Password input

    if (  pswInput.value.length!== 10) {

       pswCheck.innerHTML = "It should be 8 or above and use !@#$% ";

    } else {

        pswCheck.innerHTML = "";

    }

    // Password Repeat
    if (pswInput.value != pswrInput.value) {
        pswrCheck.innerHTML = "password repeat should be like password !";
    } else {
        pswrCheck.innerHTML = "";
    }
}




            
            var yesNo = document.getElementsByClassName("Yes-No");
            var l = "asd";
            
            function YesNoFunction(){
            for(var i = 0; i < 8; i++){
                
                yesNo[i].style.color = "white";
                
                if(yesNo[i].innerHTML == "y"){
                    
                   yesNo[i].style.backgroundColor = "#27ae60"; 
                    yesNo[i].classList.add("xx");
                    
                }else if(yesNo[i].innerHTML == "n"){
                    
                   yesNo[i].style.backgroundColor = "#c0392b"; 
                    yesNo[i].classList.add("xx");
                    
                }else{
                    
                }
                
            }
                
            }
            YesNoFunction();
            
            var td = document.getElementsByTagName("td");
            

            
            for(var i = 0; i < 72; i++){
                
                td[i].setAttribute("index",i);
                
                td[i].setAttribute("onclick","findIndex(this)");
                
            }
            
            function findIndex(s){

                var k = prompt();

                td[s.getAttribute("index")].innerHTML = k;
                
                YesNoFunction();
                
            }