const inputs = document.querySelectorAll(".otp-box");

inputs.forEach((input, index) => {
  input.addEventListener("input", (e) => {
    const value = e.target.value;

    // allow only numbers
    if (!/^[0-9]$/.test(value)) {
      input.value = "";
      return;
    }

    // move to next box
    if (index < inputs.length - 1) {
      inputs[index + 1].focus();
    }
    input.addEventListener("keydown", (e) => {
      // backspace → go to previous box
      if (e.key === "Backspace" && input.value === "" && index > 0) {
        inputs[index - 1].focus();
      }

      // ENTER key → submit
      if (e.key === "Enter") {
        checkCode();
      }
    });
  });

  input.addEventListener("keydown", (e) => {
    // backspace → go to previous box
    if (e.key === "Backspace" && input.value === "" && index > 0) {
      inputs[index - 1].focus();
    }
  });
});

function checkCode() {
  let code = "";

  inputs.forEach((input) => {
    code += input.value;
  });

  const correctCode = "2905";

  if (code === correctCode) {
    localStorage.setItem("ok", "1");
    window.location.href = "gallery.html";
  } else {
    alert("Wrong code 😅");
  }
}
