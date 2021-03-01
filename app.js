function makeLoginRequest(e) {
  e.preventDefault();
  var username = document.getElementById("usernameToFetch").value;
  var password = document.getElementById("passwordToFetch").value;
  var data = JSON.stringify({ login: username, password: password });
  console.log(data);
  const Http = new XMLHttpRequest();
  const url = "http://localhost:8080/authenticate";
  Http.open("POST", url, true);
  Http.setRequestHeader("Content-Type", "application/json");

  Http.onload = function () {
    let responseObj = Http.response;
    console.log(responseObj);
  };

  Http.send(data);
}
