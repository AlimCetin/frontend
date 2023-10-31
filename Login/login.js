let dataBase = [
  { email: "a@a.com", password: "a" },
  { email: "b@b.com", password: "b" },
];


// localStorage obje  işlemleri  Json ile yapacaksak ilk önce strinify ile string cevir (setitem) 
//sonra parse ile böl (getitem)

if (localStorage.length==0 ) 
{localStorage.setItem("data", JSON.stringify(dataBase))}
let localDate =JSON.parse(localStorage.getItem("data"));

let user;
let password; 
let loginControl = () => {
  // bu şekilde de dom dan veri çekilebilir. bana bilgi
  //user=document.getElementById( "uname").value;
  //password=document.getElementById( "upassword").value;
  let userControl = false;
  let passControl = false;
  for (let i = 0; i <= localDate.length - 1; i++) {
    if (localDate[i].email == user) {
      userControl = true;
      // kulanıcı adı doğru ise şifreyi araştır
      for (let i = 0; i <= localDate.length - 1; i++) {
        if (localDate[i].password == password) {
          passControl = true;
        }
      }
    }
  }
  if (userControl && passControl) {
   document.getElementById("formId").action =
      "/Calculate_vki/calculate_vki.html";
  } else if (!userControl && !passControl) {
    alert("Kullanıcı kayıt ekranına yönlendiliriyorsunuz....");
   document.getElementById("formId").action = "/Register/register.html";
  } else if (userControl == !passControl) {
    alert("Kullanıcı adı veya Şifre yanlış tekrar deneyiniz....");
  }
};
function userHandleChange(e) {
  user = e.target.value;
}
function passHandleChange(e) {
  password = e.target.value;
}
