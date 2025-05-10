function generateCaptcha() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let captcha = '';
    for (let i = 0; i < 6; i++) {
      captcha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById('captchaa').value=captcha;
  }
  
  function verifyForm(){
    username=document.getElementById("user").value
   
    pass=document.getElementById("pass").value
    capt=document.getElementById("captchaa").value
    vcapt=document.getElementById("vcapt").value
    if(username.length<4){
      alert("username must be longer than 4 carctere");
      return false
    }
    if(pass.length<6){
      alert("password must be longer than 6 caractere")
      return false
    }
    if(capt!=vcapt){
      alert("captcha code is false");
      return false
    }
  } 