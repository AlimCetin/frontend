let userCreat = () => {
  if (configPassword == _password) {
    localData.push({ email: _email, password: _password });
    alert(localData);
    localStorage.setItem("data", localData);
    document.getElementById("formId").action = "/Login/login.html";
  }
};
