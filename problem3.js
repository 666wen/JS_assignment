function ValidateEmail(inputText) {
    let mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    //document.getElementById("demo3").innerHTML="Valid email address!";

    if (inputText.match(mailFormat)) {
      document.getElementById("demo3").innerHTML="Valid email address!";
      return true;
    }
    else {
        document.getElementById("demo3").innerHTML="Not a valid email address!";
      return false;
    }
  }

ValidateEmail("wen@gmail.cm");