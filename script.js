function validateForm() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;
  var emailError = document.getElementById("emailError");
  var passwordError = document.getElementById("passwordError");
  var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  var passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

  if (!emailRegex.test(email)) {
    emailError.innerHTML = "Please enter a valid email address.";
    return false;
  } else {
    emailError.innerHTML = "";
  }

  if (!passwordRegex.test(password)) {
    passwordError.innerHTML = "Password must be at least 8 characters long, containing at least one uppercase and one lowercase letter, and one number.";
    return false;
  } else {
    passwordError.innerHTML = "";
  }

  // Add logic to indicate password strength

  var strength = 0;

  if (password.length >= 8) strength += 1;
  if (password.match(/([a-z].*[A-Z])|([A-Z].*[a-z])/)) strength += 1;
  if (password.match(/([0-9])/)) strength += 1;
  if (password.match(/([!,%,&,@,#,$,^,*,?,_,~])/)) strength += 1;

  var passwordStrength = document.getElementById("passwordStrength");
  if (strength < 2) {
    passwordStrength.style.color = "red";
    passwordStrength.innerHTML = "Poor";
  } else if (strength === 2) {
    passwordStrength.style.color = "orange";
    passwordStrength.innerHTML = "Medium";
  } else {
    passwordStrength.style.color = "green";
    passwordStrength.innerHTML = "Strong";
  }

  return true;
}