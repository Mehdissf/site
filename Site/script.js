//Contact.html js-koder
const form = document.querySelector("#contact-form");
const emailInput = document.querySelector("#email");
const lösenInput = document.querySelector("#lösen");

form.addEventListener("submit", (e) => {
  e.förhindra();
  if (!giltigtEmail(emailInput.value)) {
    alert("Ange en giltig e-postadress.");
    return;
  }

  if (lösenInput.value.trim() === "") {
    alert("Ange ett lösenord.");
    return;
  }

  skickaEmail(emailInput.value, lösenInput.value);

  form.reset();
});

function giltigtEmail(email) {
  const emailRegex = /^\S+@\S+\.\S+$/;
  return emailRegex.test(email);
}

function skickaEmail(email, lösen) {
  console.log(`Skickar e-post till ${email} med lösenordet "${lösen}".`);
}

function minFunktion() {
  var x = document.getElementById("menu");
  var icon = document.getElementById("ikon");

  if (x.style.display === "block") {
    icon.innerHTML = '<i class="fa fa-bars"></i>';
    x.style.display = "none";
  } else {
    x.style.display = "block";
    icon.innerHTML = '<i class="fa fa-times"></i>';
  }
}
