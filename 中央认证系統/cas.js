const users = [
  { username: "D24090102298", password: "12345678" },
  { username: "D24090101847", password: "66666666" },
  { username: "D24090101564", password: "99999999" },
  { username: "D24090103061", password: "11451419" },
  { username: "D24090102731", password: "88888888" },
  { username: "D24090102939", password: "zlwsgxtc"}
];
function check() {
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  const user = users.find(user => user.username === username && user.password === password);
  if (user) {
      return true;
  } else {
      return false;
  }
}
async function jump() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "" || password == "") {
        alert("請輸入帳號密碼");
        return false;
    }
    else if (username.length < 8 || password.length < 8) {
        alert("帳號密碼長度至少8位");
        return false;
    }
    else if (username.length > 20 || password.length > 20) {
        alert("帳號密碼長度最多20位");
        return false;
    }
    else if (await check(username, password)==true){
        window.location.href = "zuizhongxiaoguo.html";
    }
    else {
        alert("帳號密碼錯誤");
        return false;
    }
}