import cars from "./cars.js";

const galleryRef = document.querySelector(".js-gallery");

function createGalleryMarkup(cars) {
  return cars
    .map(({ img, year, model, mileage, box, engine, price }) => {
      return `<li class="car" >
  <img src="${img}" class="card-img-top" alt="..." width='295' height='200'>
  <div class="car-body">
   <div class='car-main-info'>
      <span class="car-year">${year}</span>
      <span class="car-model">${model}</span>
   </div>
         <p class="car-description">${mileage} km<span class='line'>|</span>${box}<span class='line'>|</span>${engine}</p>
      <p class="car-price">$${price}</p>
   </div>
</li>`;
    })
    .join("");
}

const creatMarkup = createGalleryMarkup(cars);
galleryRef.insertAdjacentHTML("afterbegin", creatMarkup);

console.log(galleryRef);
