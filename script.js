// Navigation
const hamburger = document.querySelector ('.hamburger');
const closeBtn = document.getElementById ('close-btn');
const openBtn = document.getElementById ('open-btn');
const navbar = document.getElementById ('navbar');

hamburger.addEventListener ('click', () => {
  navbar.classList.toggle ('show');
  if (true) {
    closeBtn.classList.toggle ('close');
    openBtn.classList.toggle ('open');
  }
});
// Slider
const swiper = new Swiper ('.swiper', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

// Drop Down Func
const DropDownFunction = () => {
  // DropDown first
  const firstBtnDropDown = document.getElementById ('dropDown-first');
  const downlist = document.querySelector ('.down');
  firstBtnDropDown.addEventListener ('click', () => {
    downlist.classList.toggle ('hidden');
  });

  // DropDown Second
  const secondBtnDropDown = document.getElementById ('dropDown-second');
  const seconddownlist = document.querySelector ('.downSecond');
  secondBtnDropDown.addEventListener ('click', () => {
    seconddownlist.classList.toggle ('hidden');
  });

  // DropDown Third
  const thirdDown = document.getElementById ('dropDown-third');
  const thirddownlist = document.querySelector ('.downthird');
  thirdDown.addEventListener ('click', () => {
    thirddownlist.classList.toggle ('hidden');
  });

  // DropDown Fourth
  const fourthDown = document.getElementById ('dropDown-fourth');
  const fourthDownlist = document.querySelector ('.downfourth');
  fourthDown.addEventListener ('click', () => {
    fourthDownlist.classList.toggle ('hidden');
  });
  // DropDown Fifth
  const fifthDown = document.getElementById ('dropDown-fifth');
  const fifthDownlist = document.querySelector ('.downfifth');
  fifthDown.addEventListener ('click', () => {
    fifthDownlist.classList.toggle ('hidden');
  });
  // DropDown Sixth
  const sixthDown = document.getElementById ('dropDown-sixth');
  const sixthDownlist = document.querySelector ('.downsixth');
  sixthDown.addEventListener ('click', () => {
    sixthDownlist.classList.toggle ('hidden');
  });
};

DropDownFunction ();
