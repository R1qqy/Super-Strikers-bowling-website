/* const submit_button = document.getElementById('submitBtn')
submit_button.addEventListener("click", ()=> {
alert ('booking confirmed!')
})    im trying something else */

//so far this does nothing. it should give the alert if the date input field is empty though
function validateForm() {
var x=document.forms["myForm"]["theDate"].value;
if (x == ""|| x == null) {
    alert("Please enter a date and time"); 
    return false;
}
}


//this code shows a confirmation once the button is clicked
function myFunction() {
    document.getElementById("booking").innerHTML="Your booking is confirmed!";
} 