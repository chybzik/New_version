"use strict";
let elmn = document.querySelector('.button_start');
elmn.addEventListener('click', function() {
 function createNewUser(){
    let newUser = {
        getLogin: function() {
            return console.log(this.firstName[0].toLowerCase() + this.secondName.toLowerCase()) ;
        }
    };
    newUser.firstName = prompt("Write your first name");
    newUser.secondName = prompt("Write your second name");
    newUser.getLogin();
    return newUser;
 }
 createNewUser();
});
