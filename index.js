function validate() {
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("form-password").value;
  let confirm_password = document.getElementById("confirm-password").value;
  let tandc = document.getElementById("tandc").checked;

  let error = false

    if (firstName.length >= 3) {
      document.getElementById("firstValid").style.display = "block";
      document.getElementById("firstInvalid").style.display = "none";
    } else {
      error = true
      document.getElementById("firstInvalid").style.display = "block";
      document.getElementById("firstValid").style.display = "none";
    }

    if (lastName.length >= 3) {
      document.getElementById("lastValid").style.display = "block";
      document.getElementById("lastInvalid").style.display = "none";
    } else {
      error = true
      document.getElementById("lastInvalid").style.display = "block";
      document.getElementById("lastValid").style.display = "none";
    }

    if (
      email.includes("@") &&
      email.includes(".") &&
      email.indexOf("@") > 0 &&
      email.substr(email.lastIndexOf('.') + 1).length >= 2 && email.length > 1
    ) {
      document.getElementById("emailValid").style.display = "block";
      document.getElementById("emailInvalid").style.display = "none";
    } else {
      error = true
      document.getElementById("emailInvalid").style.display = "block";
      document.getElementById("emailValid").style.display = "none";
    }

    if(
      (password.includes("$") || password.includes("@") || password.includes("#")) && 
      (password.includes(0) || password.includes(1) || password.includes(2) ||
      password.includes(3) || password.includes(4)) && 
      password.length >= 8
    ) {
      document.getElementById("passwordValid").style.display = "block";
      document.getElementById("password-Invalid").style.display = "none";
    } else {
      error = true
      document.getElementById("passwordValid").style.display = "none";
      document.getElementById("password-Invalid").style.display = "block";
    
    }

    if( password === confirm_password && confirm_password.length >= 8)
    {
      document.getElementById("cpasswordValid").style.display = "block";
      document.getElementById("confirm-password-invalid").style.display = "none";
    } else {
      error = true
      document.getElementById("cpasswordValid").style.display = "none";
      document.getElementById("confirm-password-invalid").style.display = "block";  
    }

    if (tandc) {
      document.getElementById("tandcChecked").style.display = "none";
    } else {
      error = true
      document.getElementById("tandcChecked").style.display = "block";
    }

    if(!error) {
      alert ('Your details have been saved successfully!')
      resetFields()
    }
}

function resetFields () {
	document.getElementById('registration-form').reset()
  document.getElementById('firstValid').style.display = 'none'
	document.getElementById('lastValid').style.display = 'none'
	document.getElementById('emailValid').style.display = 'none'
	document.getElementById('tandcChecked').style.display = 'none'
  document.getElementById('passwordValid').style.display = 'none'
  document.getElementById('cpasswordValid').style.display = 'none'

}