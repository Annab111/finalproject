var createAccountForm = document.querySelector("#createAccount")

createAccountForm.addEventListener("submit", e => {
    e.preventDefault();
    console.log(createAccountForm.username.value, createAccountForm.emailaddress.value, createAccountForm.password.value)
    
    var email = createAccountForm.emailaddress.value;
    var password = createAccountForm.password.value;
    
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in 
        //var user = userCredential.user;
        // ...
        console.log("user created")
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
      });
    
    })