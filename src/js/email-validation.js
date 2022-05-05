(function () {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  let forms = document.querySelectorAll(".needs-validation");
  let input = document.querySelector(".form-control");

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms).forEach(function (form) {
    form.addEventListener(
      "submit",
      function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          input.classList.add("is-invalid");
          event.stopPropagation();
        }
        event.preventDefault();
        form.classList.add("was-validated");
        input.classList.add("is-valid");
      },
      false
    );
  });
})();
