function validateForm(){

var name = document.getElementById("name").value;
var email = document.getElementById("email").value;
var country = document.getElementById("country").value;

if(name == "" || email == "" || country == "")
{
alert("Please fill all details");
return false;
}

document.getElementById("result").innerHTML = "Thank you for contacting us! We will respond soon.";

return false;

}
