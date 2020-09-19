document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const inputValue = document.getElementById("username").value;

  fetch(`https://api.github.com/users/${inputValue}`)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
});
