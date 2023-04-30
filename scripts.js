window.addEventListener("load", function () {
  const form = document.getElementById("user-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    if (succesfullSubmitExists()) {
      alert("You already submitted!");
      return;
    }

    const data = new FormData(form);
    const action = e.target.action;
    fetch(action, {
      method: "POST",
      body: data,
    })
      .then(() => {
        localStorage.setItem("succesfullSubmit", true);
        alert("Success!");
      });
  });
});

// Only allow 1 succesfull post
// save boolean in localStorage
function succesfullSubmit() {
  localStorage.setItem("succesfullSubmit", true);
}

function succesfullSubmitExists() {
  return localStorage.getItem("succesfullSubmit") === "true";
}
