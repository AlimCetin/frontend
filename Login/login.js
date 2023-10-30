let userDataBase = ["a@a.com", "b@b.com"];
let passwordDataBase = ["a", "b"];
localStorage.setItem("userDataBase", userDataBase);
localStorage.setItem("password", passwordDataBase);
let user;
let password;
let loginControl = () => {
  // bu şekilde de dom dan veri çekilebilir. bana bilgi
  //user=document.getElementById( "uname").value;
  //password=document.getElementById( "upassword").value;
  let userControl = false;
  let passControl = false;
  for (let value of userDataBase) {
    if (value == user) {
      userControl = true;
      // kulanıcı adı doğru ise şifreyi araştır
      for (let value of passwordDataBase) {
        if (value == password) {
          passControl = true;
        }
      }
    }
  }
  if (userControl && passControl) {
    document.getElementById("formId").action =
      "/Calculate_vki/calculate_vki.html";
  } else if (!userControl) {
    document.getElementById("formId").action = "/Register/register.html";
  }
};
function userHandleChange(e) {
  user = e.target.value;
}
function passHandleChange(e) {
  password = e.target.value;
}
