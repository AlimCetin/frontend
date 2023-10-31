let firstName;
let lastName;
let _email;
let _password;
let configPassword;
let localData = JSON.parse(localStorage.getItem("data"));
console.log(localData);
let userCreat = () => {
  if (configPassword == _password) {
    let addData = { email: _email, password: _password };
   localData.push(addData);
   console.log(localData);
    localStorage.setItem("data", JSON.stringify(localData));

    document.getElementById("formId").action = "/Login/login.html";
  }
};
function handleChange(e, inputType) {
  if (inputType == "firstName") {
    firstName = e.target.value;
  } else if (inputType == "lastName") {
    lastName = e.target.value;
  } else if (inputType == "email") {
    _email = e.target.value;
  } else if (inputType == "uPassword") {
    _password = e.target.value;
  } else if (inputType == "configPassword") {
    configPassword = e.target.value;
  }
}
