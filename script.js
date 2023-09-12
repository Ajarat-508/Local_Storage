var usersData = [];

function signUpData(event) {
  event.preventDefault();
  let firstName = document.getElementById("firstName").value;
  let lastName = document.getElementById("lastName").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("password").value;

  let newUsers = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
  };

  usersData.push(newUsers);

  localStorage.setItem("users", JSON.stringify(usersData));
  window.location.href = "./login.html";
}
