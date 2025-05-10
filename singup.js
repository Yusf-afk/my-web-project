
function verifyForm(){
  username=document.getElementById("username").value
  email=document.getElementById("email").value
  pass=document.getElementById("password").value
  confirmpass=document.getElementById("confirmPassword").value

  if(username.length<4){
    alert("username must be longer than 4 carctere");
    return false
  }
  if(pass.length<6){
    alert("password must be longer than 6 caractere")
    return false
  }
  if(pass!=confirmpass){
    alert("the confirm password doesn't match with the first password ")
    return false
  }
} 