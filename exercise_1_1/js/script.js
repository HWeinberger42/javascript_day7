const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

// animation of active slide image

let buttonPrev = document.getElementById("swiperButtonPrev1");
let buttonNext = document.getElementById("swiperButtonNext1");

const getActiveImage = () => {
    return document.querySelector(".swiper-slide-active").firstElementChild;
}

const animateSwiperSlideImagePrev = () => {
    const ele = getActiveImage()
    ele.classList.add("animate__animated", "animate__slow", "animate__backInLeft");
    setTimeout(()=>{
        ele.classList.remove("animate__animated", "animate__slow", "animate__backInLeft");
    },2000)
};

const animateSwiperSlideImageNext = () => {
    const ele = getActiveImage()
    ele.classList.add("animate__animated", "animate__slow", "animate__backInRight");
    setTimeout(()=>{
        ele.classList.remove("animate__animated", "animate__slow", "animate__backInRight");
    },2000)
};

buttonPrev.addEventListener("click", animateSwiperSlideImagePrev);
buttonNext.addEventListener("click", animateSwiperSlideImageNext);


