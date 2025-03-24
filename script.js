const navuser = document.getElementById("nav-user");
const formoverlay = document.getElementById("form-overlay");

const signupform = document.getElementById("signupform");
const sformxmark = document.getElementById("sfomxmark");

const lform = document.getElementById("login-form");
const lformxmark = document.getElementById("lfomxmark");


const loginlinkbtn = document.getElementById("login-form-link-btn");

const signuplink = document.getElementById("sign-up-link");


const searchicon = document.getElementById("searchicon");

const searchlogo =  document.getElementById("searchlogo");


/*SIGNUP FORM INPUTS*/ 
const supFirstName = document.getElementById("sfnamesinput");//signup first name
const supLastName = document.getElementById("slnamesinput");//signup Last name
const supDate = document.getElementById("sfomdates");//signup Dates
const supEmail = document.getElementById("sfomemail");//signup email
const supPassword = document.getElementById("sfompass"); //signup password

const sfomsubmit= document.getElementById("sfomsubmit"); //signup form submit button




/*Sign Up Form Details*/
const firstnamedetails = document.getElementById("firstnamedetails");
const lastnamedetails = document.getElementById("lastnamedetails");
const dobdetails = document.getElementById("dobdetails");
const emaildetails = document.getElementById("emaildetails");
const passworddetails = document.getElementById("passworddetails");


/*LOGIN FORM INPUTS*/
const username = document.getElementById("username");//login username
const userpass = document.getElementById("user-pass");// login user password
const userlogind = document.getElementById("userlogind");// login form login button
/*............................................*/ 

sfomsubmit.onclick = () =>
{
  firstnamedetails.innerHTML=supFirstName.value;
  lastnamedetails.innerHTML=supLastName.value;
  dobdetails.innerHTML=supDate.value;
  emaildetails.innerHTML=supEmail.value;
  passworddetails.innerHTML=supPassword.value; 
  signupform.style.display = "none";
  formoverlay.style.display = "none";
}

userlogind.onclick = () =>
  {
    if(supFirstName.value!="" && supPassword.value!="")
    {console.log(username.value=supFirstName.value);
    console.log(userpass.value=supPassword.value);
    window.alert("Login Sucessfull");
    username.innerHTML=supFirstName.value;
    userpass.innerHTML=supPassword.value;
    lform.style.display = "none";
    signupform.style.display = "none";
    formoverlay.style.display = "none";
  }

    else {
      window.alert("Invalid Username or Password, Please Try Again");
    }
  }






















navuser.onclick = function () {
 setTimeout(function() {if (formoverlay.style.display === "none"  && signupform.style.display === "none" && lform.style.display === "none")
  {
    formoverlay.style.display = "flex";
    signupform.style.display = "flex";
    lform.style.display ="flex";
  } 
  
  else {
    formoverlay.style.display = "flex";
    signupform.style.display ="flex";
    lform.style.display ="flex";
  }}, 100)

};


/*formoverlay.onclick=function(){
    formoverlay.style.display="none";
    signupform.style.display = "none";
}*/


sformxmark.onclick = () => {
 setTimeout(function() {if (formoverlay.style.display === "flex" && signupform.style.display === "flex") {
    signupform.style.display = "none";
    formoverlay.style.display = "none";
    
  }},100)
};

lformxmark.onclick = () => {
  setTimeout(function() {if (formoverlay.style.display === "flex" && lform.style.display === "flex") {
    lform.style.display = "none";
     formoverlay.style.display = "none";
     
   }},100)
 };
 

signuplink.onclick=function flipDiv() {
  document.getElementById("login-signup").classList.toggle("flip1");
}

loginlinkbtn.onclick=function flipDiv() {
  document.getElementById("login-signup").classList.toggle("flip1");
}


// navuser.onmouseenter = function () {
//   let nav_options = document.getElementById("nav-options");
//   nav_options.style.display="flex";
// }

// searchicon.onclick=()=>
// {
//   let searchbox = document.getElementById("nav-searchbox");
// if(searchbox.style.top="-5vh")
//   {
//     // searchbox.style.display="flex";
//     searchbox.style.top = "10vh";
//   }

//   else if (searchbox.style.top==="10vh") {
//     searchlogo.onauxclick = function () {
//       searchbox.style.top = "-15vh";
//     }
//   }

  
  
//   }

searchicon.onclick = () => {
  let searchbox = document.getElementById("nav-searchbox");
 if (searchbox.style.top === "") { // Use comparison operator
    searchbox.style.top = "-5vh";
 }
  
  if (searchbox.style.top === "-5vh") { // Use comparison operator
    searchbox.style.top = "10vh";
  
  } else {
    searchbox.style.top = "-5vh"; // To ensure we have a fallback
  }
};
