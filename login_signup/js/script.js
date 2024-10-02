const loginForm = document.querySelector("form.login");
const signupForm = document.querySelector("form.signup");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector(".signup-link a");
const loginLink = document.querySelector(".login-link a");
const loginText = document.querySelector(".text-title .login");
// const signupText = document.querySelector(".text-title .signup");

signupBtn.addEventListener("click", () => {
  loginForm.style.marginLeft = "-50%";
  loginText.style.marginLeft = "-50%";
});

loginBtn.addEventListener("click", () => {
  loginForm.style.marginLeft = "0%";
  loginText.style.marginLeft = "0%";
});

signupLink.addEventListener("click", (e) => {
  e.preventDefault();
  signupBtn.click();
});

loginLink.addEventListener("click", (e) => {
  e.preventDefault();
  loginBtn.click();
});

// signupLink.addEventListener("click", () => {
//   signupBtn.click();
//   return false;
// });

// loginLink.addEventListener("click", () => {
//   loginBtn.click();
//   return false;
// });




//  local Storage

// local storage

// var obj= {
//     name:"hira",
//     no:"65a"
// }


// localStorage.setItem("user",JSON.stringify(obj))
// console.log(localStorage.getItem("user"));
// console.log(localStorage.getItem("users"));

function getUsers(){
  var users = localStorage.getItem("users")
  console.log(users);

  if(users){
      users= JSON.parse(users)

  }else{
      users= []
  }
  return users
}


function register(){
  // var name = document.getElementById("name")
  var email = document.getElementById("email")
  var password = document.getElementById("password")
  var cnfrmPassword = document.getElementById("cnfrmpassword")
  var users = getUsers()
  
  console.log(users);

  var user = {
      // name:name.value,
      email:email.value,
      password:password.value,
      cnfrmPassword:cnfrmPassword.value
  }

  users.push(user)
  localStorage.setItem("users",JSON.stringify(users))
  // alert("Registration Successful");
  // email.value = ""
  // password.value = ""

  
}

function login(){
 
  var email = document.getElementById("lemail")
  var password = document.getElementById("lpassword")
  var users= getUsers()
  var isAuthenticate = false
  // console.log(users);
  for(var i =0;i < users.length; i++){
      // console.log(users[i].email);
      if(email.value === users[i].email && password.value === users[i].password){
          isAuthenticate= true
          console.log('succesfully login');
          location.href = './home.html';
          
          break;

      }else{
          console.log("invalid email/password");
          
      }
      
  }
  



}