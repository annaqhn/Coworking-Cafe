console.log ("contact page is running");

//start of contact js
const name_field = document.getElementById('name')
const email_field = document.getElementById('email')
const msg_field = document.getElementById('message')
const send_btn = document.getElementById('send')

function nameCheck () {
    if (name_field.value === "") {
      alert ("Udfyld felt 'Navn'")
      return false
    }
    else {
      return true
    }
  }

  function emailCheck () {
    if (email_field.value === "") {
      alert ("Udfyld felt 'Email'")
      return false
    }
    else {
      return true
    }
  }

  function messageCheck () {
    if (msg_field.value === "") {
      alert ("Udfyld felt 'Besked'")
      return false
    }
    else {
      return true
    }
  }

  // function multipleCheck () {
    //if ((name_field.value === "") && (email_field.value === "")) {
        //alert ("Udfyld felter 'Navn' og 'Email")
        //return false
    //}
    //else {
      //return true
    //}
  //}

  function sendMessage () {
      if (nameCheck() && emailCheck() && messageCheck()) {
        alert ("Din besked er sendt")
      }
      else {
      }
    }



  //event listener starts here
  send_btn.addEventListener("click", sendMessage);

//end of contact js