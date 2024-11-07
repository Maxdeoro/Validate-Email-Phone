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

const validatePhone = (phone) => {
  return String(phone)
  .toLowerCase()
  .match(
    // /^[\+]?[0-9]{0,3}\W?+[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
    // /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g
    /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]{8,14}$/g 
  );
};

function checkPhone() {
  const phoneNumber = document.form2.phone.value;
  
  if(validatePhone(phoneNumber)) {
    document.getElementById('span2').innerText = 'It s OK !';
  } else {
    document.getElementById('span2').innerText = 'Incorrect phonenumber !';
  }
};