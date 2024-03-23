gsap.from(".navbar" , {
    y: -100,
    duration:1,
    delay:0.4
}
)

gsap.from("#main-section h1",{
    y:100,
    opacity:0,
    duration: 1,
    delay:0.4
})

gsap.from("#main-section h3",{
    y:10,
    duration: 0.8,
    delay:2,
    repeat:-1,
    yoyo:true,
    opacity:0,
})

gsap.from("#img1",{
    x:-100,
    duration:1,
    opacity:0,
    delay:0.4
})

gsap.from("#img2",{
    x:70,
    duration:1,
    opacity:0,
    delay:0.4
})
// -------------------------------------------------------------

// slider product section js
var swiper = new Swiper(".itemsMySwiper", {
    slidesPerView: 4,
    spaceBetween: 50,
    freeMode: true,
    autoplay :{
        delay: 2500,
        disableOnInteraction : true
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });

//   ---------------------Testimonial javascript-------------------------

  var swiper = new Swiper(".testiMySwiper", {
    freeMode: true,
    autoplay :{
        delay: 4000,
        disableOnInteraction : true
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },
  });