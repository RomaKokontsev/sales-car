let select = function () {
  let selectHeader = document.querySelectorAll(".select__header");
  let selectItem = document.querySelectorAll(".select__item");

  selectHeader.forEach((item) => {
    item.addEventListener("click", selectToggle);
  });

  selectItem.forEach((item) => {
    item.addEventListener("click", selectChoose);
  });

  function selectToggle() {
    this.parentElement.classList.toggle("is-active");
  }

  function selectChoose() {
    let text = this.innerText,
      select = this.closest(".select"),
      currentText = select.querySelector(".select__current");
    currentText.innerText = text;
    select.classList.remove("is-active");
  }
};

let filter = function () {
  let filterHeader = document.querySelector(".filter-header");
  let filterItem = document.querySelectorAll(".filter-item");

  filterHeader.addEventListener("click", openModal);

  filterItem.forEach((item) => {
    item.addEventListener("click", filterChoose);
  });

  function openModal() {
    this.parentElement.classList.toggle("is-open");
  }

  function filterChoose() {
    let text = this.innerText,
      select = this.closest(".filter"),
      currentText = select.querySelector(".current-filter");
    currentText.innerText = text;
    select.classList.remove("is-open");
  }
};

select();
filter();
