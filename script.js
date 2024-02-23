document.addEventListener("DOMContentLoaded", function () {
  const next1Button = document.getElementById("next1");
  const back1Button = document.getElementById("back1");
  const next2Button = document.getElementById("next2");
  const back2Button = document.getElementById("back2");

  const form1 = document.getElementById("form1");
  const form2 = document.getElementById("form2");
  const form3 = document.getElementById("form3");

  next1Button.addEventListener("click", function () {
    form1.classList.add("form-next-1");
    form2.classList.add("form-next-2");
  });

  back1Button.addEventListener("click", function () {
    form1.classList.remove("form-next-1");
    form2.classList.remove("form-next-2");
  });

  next2Button.addEventListener("click", function () {
    form2.classList.remove("form-next-2");
    form3.classList.add("form-next-3");
  });

  back2Button.addEventListener("click", function () {
    form2.classList.add("form-next-2");
    form3.classList.remove("form-next-3");
  });
});
