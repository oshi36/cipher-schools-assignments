/*
  Exercises 01
  ------------
  Add a label to each of the input fields: username, password, confirm password
*/


/*
  Exercise 02
  -----------
  Add a required validation to each input that shows an error message next to the entry if it does not have any text entered.
*/



/*
  Exercise 03
  -----------
  Add a further validation to check if the user input in the password and confirm password inputs match.  Show an error message if they do not.
*/
function Validate() {
  var password = document.getElementById("password").value;
  var confirmpassword = document.getElementById("confirmpassword").value;
  if (password != confirmpassword) {
      alert("Passwords do not match.");
      document.getElementById("confirmpassword").value="";
      return false;
  }
  return true;
}



/*
  Exercise 04
  -----------
Ensure the ‘Register’ button is disabled until the user has entered valid data into all the input fields.  Once they have, the registration button should then be enabled.
*/
function manage() {
  var bt = document.getElementById('submit');
  var ele = document.getElementsByTagName('input'); 

  
  // Loop through each element.
  for (i = 0; i < ele.length; i++) {

      // Check the element type
      if ( (ele[i].type == 'text'||ele[i].type == 'password') && (ele[i].value == '') ) {
          bt.disabled = true;    // Disable the button.
          return false;
      }
      else {
          bt.disabled = false;   // Enable the button.
      }
  }
}

/*
  Exercise 05
  -----------
When the user clicks the ‘Register’ button, a message should be displayed informing them of a successful user registration.
*/
function displayMsg() {
  if(document.getElementById('password').value===document.getElementById('confirmpassword').value)
  {
  alert("You are successfully registered!!!");
  }
}



