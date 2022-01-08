$(".video-slider").owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 2000,
  autoplayHoverPause:true,
});



window.addEventListener('scroll',function(){
  let header = document.querySelector('nav');

  header.classList.toggle('scrolling-active',window.scrollY > 0);
})