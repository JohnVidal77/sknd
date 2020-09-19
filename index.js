document.getElementById("form").addEventListener("submit", function (e) {
  e.preventDefault();

  const inputValue = document.getElementById("username").value;

  fetch(`https://api.github.com/users/${inputValue}`)
    .then((response) => response.json())
    .then((data) => {
      let apiResponse = data;

      document.getElementById(
        "result"
      ).innerHTML = `<h1>${apiResponse.name}</h1>`;
    })
    .catch((err) => console.log(err));
});
