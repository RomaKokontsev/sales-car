let questions = function () {
  let questionHeader = document.querySelectorAll(".question-js");
  let questionDescription = document.querySelectorAll(".question-js1");

  questionHeader.forEach((item) => {
    item.addEventListener("click", openDescription);
  });

  questionDescription.forEach((item) => {
    item.addEventListener("click", closeDescription);
  });

  function openDescription(e) {
    e.currentTarget.classList.add("visually-hidden");
    this.nextElementSibling.classList.remove("visually-hidden");
  }
  function closeDescription(e) {
    this.classList.add("visually-hidden");
    this.previousElementSibling.classList.remove("visually-hidden");
  }
};

questions();
