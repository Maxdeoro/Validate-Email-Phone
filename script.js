const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

function checkEmail() {
  const mail = document.form1.email.value;

  if(validateEmail(mail)) {
    document.getElementById('span1').innerText = 'It s OK !';
  } else {
    document.getElementById('span1').innerText = 'Incorrect email !';
  }
};