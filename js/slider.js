// слайдер

const aboutImgContainer = document.querySelector('.about__img-container');
const paginationItemOne = document.querySelector('.about__pagination-item-one');
const itemPaginationOne = document.querySelector('.about__item-pagination-one');
const paginationItemTwo = document.querySelector('.about__pagination-item-two');
const itemPaginationTwo = document.querySelector('.about__item-pagination-two');
const paginationItemThree = document.querySelector('.about__pagination-item-three');
const paginationItemFour = document.querySelector('.about__pagination-item-four');
const paginationItemFive = document.querySelector('.about__pagination-item-five');
const itemPaginationThree = document.querySelector('.about__item-pagination-three');
const itemPaginationFour = document.querySelector('.about__item-pagination-four');
const itemPaginationFive = document.querySelector('.about__item-pagination-five');
const aboutArrowLeft = document.querySelector('.about__arrow-left');
const aboutArrowRight = document.querySelector('.about__arrow-right');

let count = 1;

function arrowRight () {
count++
  if (count == 1) {
    aboutImgContainer.classList.add('about__img-container_translate-one');
    aboutArrowLeft.classList.add('about__arrow_inactive');
    
  } if (count == 2) {
    aboutImgContainer.classList.add('about__img-container_translate-four');
    aboutImgContainer.classList.remove('about__img-container_translate-one');
    aboutArrowLeft.classList.remove('about__arrow_inactive');
    paginationItemTwo.classList.add('about__pagination-item_active');
    itemPaginationTwo.classList.add('about__item-pagination_active');
    paginationItemOne.classList.remove('about__pagination-item_active');
    itemPaginationOne.classList.remove('about__item-pagination_active');
  }
  if (count == 3) {
    aboutImgContainer.classList.add('about__img-container_translate-five');
    aboutImgContainer.classList.remove('about__img-container_translate-four');
    aboutArrowLeft.classList.remove('about__arrow_inactive');
    paginationItemThree.classList.add('about__pagination-item_active');
    itemPaginationThree.classList.add('about__item-pagination_active');
    paginationItemTwo.classList.remove('about__pagination-item_active');
    itemPaginationTwo.classList.remove('about__item-pagination_active');
  }
  if (count == 4) {
    aboutImgContainer.classList.add('about__img-container_translate-last');
    aboutImgContainer.classList.remove('about__img-container_translate-five');
    aboutArrowLeft.classList.remove('about__arrow_inactive');
    paginationItemFour.classList.add('about__pagination-item_active');
    itemPaginationFour.classList.add('about__item-pagination_active');
    paginationItemThree.classList.remove('about__pagination-item_active');
    itemPaginationThree.classList.remove('about__item-pagination_active');
  }
  if (count == 5) {
    aboutImgContainer.classList.add('about__img-container_translate-last-plus');
    aboutImgContainer.classList.remove('about__img-container_translate-last');
    aboutArrowRight.classList.add('about__arrow_inactive');
    aboutArrowLeft.classList.remove('about__arrow_inactive');
    paginationItemFive.classList.add('about__pagination-item_active');
    itemPaginationFive.classList.add('about__item-pagination_active');
    paginationItemFour.classList.remove('about__pagination-item_active');
    itemPaginationFour.classList.remove('about__item-pagination_active');
  } if (count > 5) {
    count = 5
  }

}

function arrowLeft () {
  count--
  if (count == 1) {
    aboutImgContainer.classList.add('about__img-container_translate-one');
    aboutImgContainer.classList.remove('about__img-container_translate-four');
    aboutArrowLeft.classList.add('about__arrow_inactive');
    paginationItemTwo.classList.remove('about__pagination-item_active');
    itemPaginationTwo.classList.remove('about__item-pagination_active');
    paginationItemOne.classList.add('about__pagination-item_active');
    itemPaginationOne.classList.add('about__item-pagination_active');
  } if (count == 2) {
    aboutImgContainer.classList.add('about__img-container_translate-four');
    aboutImgContainer.classList.remove('about__img-container_translate-five');
    paginationItemThree.classList.remove('about__pagination-item_active');
    itemPaginationThree.classList.remove('about__item-pagination_active');
    paginationItemTwo.classList.add('about__pagination-item_active');
    itemPaginationTwo.classList.add('about__item-pagination_active');
    
  }
  if (count == 3) {
    aboutImgContainer.classList.add('about__img-container_translate-five');
    aboutImgContainer.classList.remove('about__img-container_translate-last');
    paginationItemFour.classList.remove('about__pagination-item_active');
    itemPaginationFour.classList.remove('about__item-pagination_active');
    paginationItemThree.classList.add('about__pagination-item_active');
    itemPaginationThree.classList.add('about__item-pagination_active');
  }
  if (count == 4) {
    aboutImgContainer.classList.add('about__img-container_translate-last');
    aboutImgContainer.classList.remove('about__img-container_translate-last-plus');
    aboutArrowRight.classList.remove('about__arrow_inactive');
    paginationItemFive.classList.remove('about__pagination-item_active');
    itemPaginationFive.classList.remove('about__item-pagination_active');
    paginationItemFour.classList.add('about__pagination-item_active');
    itemPaginationFour.classList.add('about__item-pagination_active');
  }
  if (count == 5) {
    
  }
  if (count < 1) {
    count = 1
  }
  
}


aboutArrowRight.addEventListener('click', arrowRight)
aboutArrowLeft.addEventListener('click', arrowLeft)




paginationItemOne.addEventListener('click', function () {
  aboutImgContainer.classList.remove('about__img-container_translate-four');
  aboutImgContainer.classList.remove('about__img-container_translate-five');
  aboutImgContainer.classList.remove('about__img-container_translate-last');
  aboutImgContainer.classList.remove('about__img-container_translate-last-plus')
  aboutImgContainer.classList.add('about__img-container_translate-one');
  paginationItemOne.classList.add('about__pagination-item_active');
  itemPaginationOne.classList.add('about__item-pagination_active');
  paginationItemTwo.classList.remove('about__pagination-item_active');
  itemPaginationTwo.classList.remove('about__item-pagination_active');
  paginationItemThree.classList.remove('about__pagination-item_active');
  itemPaginationThree.classList.remove('about__item-pagination_active');
  paginationItemFour.classList.remove('about__pagination-item_active');
  itemPaginationFour.classList.remove('about__item-pagination_active');
  paginationItemFive.classList.remove('about__pagination-item_active');
  itemPaginationFive.classList.remove('about__item-pagination_active');
  count = 1;
  aboutArrowLeft.classList.add('about__arrow_inactive');
  aboutArrowRight.classList.remove('about__arrow_inactive');
 })

paginationItemTwo.addEventListener('click', function () {
  aboutArrowLeft.classList.remove('about__arrow_inactive');
  aboutImgContainer.classList.add('about__img-container_translate-four');
  aboutImgContainer.classList.remove('about__img-container_translate-five');
  aboutImgContainer.classList.remove('about__img-container_translate-last');
  aboutImgContainer.classList.remove('about__img-container_translate-last-plus')
  paginationItemTwo.classList.add('about__pagination-item_active');
  itemPaginationTwo.classList.add('about__item-pagination_active');
  paginationItemOne.classList.remove('about__pagination-item_active');
  itemPaginationOne.classList.remove('about__item-pagination_active');
  paginationItemThree.classList.remove('about__pagination-item_active');
  itemPaginationThree.classList.remove('about__item-pagination_active');
  paginationItemFour.classList.remove('about__pagination-item_active');
  itemPaginationFour.classList.remove('about__item-pagination_active');
  paginationItemFive.classList.remove('about__pagination-item_active');
  itemPaginationFive.classList.remove('about__item-pagination_active');
  count = 2;
  aboutArrowLeft.classList.remove('about__arrow_inactive');
  aboutArrowRight.classList.remove('about__arrow_inactive');
})

paginationItemThree.addEventListener('click', function () {
  aboutImgContainer.classList.add('about__img-container_translate-five');
  aboutImgContainer.classList.remove('about__img-container_translate-last');
  aboutImgContainer.classList.remove('about__img-container_translate-last-plus')
  paginationItemOne.classList.remove('about__pagination-item_active');
  itemPaginationOne.classList.remove('about__item-pagination_active');
  paginationItemTwo.classList.remove('about__pagination-item_active');
  itemPaginationTwo.classList.remove('about__item-pagination_active');
  paginationItemThree.classList.add('about__pagination-item_active');
  itemPaginationThree.classList.add('about__item-pagination_active');
  paginationItemFour.classList.remove('about__pagination-item_active');
  itemPaginationFour.classList.remove('about__item-pagination_active');
  paginationItemFive.classList.remove('about__pagination-item_active');
  itemPaginationFive.classList.remove('about__item-pagination_active');
  count = 3;
  aboutArrowLeft.classList.remove('about__arrow_inactive');
  aboutArrowRight.classList.remove('about__arrow_inactive');
})


 paginationItemFour.addEventListener('click', function () {
  aboutImgContainer.classList.add('about__img-container_translate-last');
  aboutImgContainer.classList.remove('about__img-container_translate-last-plus')
  paginationItemFour.classList.add('about__pagination-item_active');
  itemPaginationFour.classList.add('about__item-pagination_active');
  paginationItemOne.classList.remove('about__pagination-item_active');
  paginationItemTwo.classList.remove('about__pagination-item_active');
  paginationItemThree.classList.remove('about__pagination-item_active');
  itemPaginationOne.classList.remove('about__item-pagination_active');
  itemPaginationTwo.classList.remove('about__item-pagination_active');
  itemPaginationThree.classList.remove('about__item-pagination_active');
  paginationItemFive.classList.remove('about__pagination-item_active');
  itemPaginationFive.classList.remove('about__item-pagination_active');
  count = 4;
  aboutArrowLeft.classList.remove('about__arrow_inactive');
  aboutArrowRight.classList.remove('about__arrow_inactive');
 })

 itemPaginationFive.addEventListener('click', function () {
  aboutImgContainer.classList.add('about__img-container_translate-last-plus');
  paginationItemFive.classList.add('about__pagination-item_active');
  itemPaginationFive.classList.add('about__item-pagination_active');
  paginationItemOne.classList.remove('about__pagination-item_active');
  paginationItemTwo.classList.remove('about__pagination-item_active');
  paginationItemThree.classList.remove('about__pagination-item_active');
  paginationItemFour.classList.remove('about__pagination-item_active');
  itemPaginationOne.classList.remove('about__item-pagination_active');
  itemPaginationTwo.classList.remove('about__item-pagination_active');
  itemPaginationThree.classList.remove('about__item-pagination_active');
  itemPaginationFour.classList.remove('about__item-pagination_active');
  count = 5;
  aboutArrowLeft.classList.remove('about__arrow_inactive');
  aboutArrowRight.classList.add('about__arrow_inactive');
 })



