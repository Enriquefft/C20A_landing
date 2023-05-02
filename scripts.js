window.addEventListener("load", function () {
  const form = document.getElementById("user-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // if (succesfullSubmitExists()) {
    //   alert("Ya llenaste este formulario!");
    //   return;
    // }
    const data = new FormData(form);

    const mail = data.get("Correo");
    console.log(mail);
    console.log(data.get("Ciclo"));

    if (!mail.includes("@utec.edu.pe")) {
      alert("Correo no valido");
      return;
    }

    const action = e.target.action;
    fetch(action, {
      method: "POST",
      body: data,
    })
      .then(() => {
        localStorage.setItem("succesfullSubmit", true);
        alert("Gracias futuro 20ador!");
      });
  });
});

// Only allow 1 succesfull post
function succesfullSubmit() {
  localStorage.setItem("succesfullSubmit", true);
}

function succesfullSubmitExists() {
  return localStorage.getItem("succesfullSubmit") === "true";
}
