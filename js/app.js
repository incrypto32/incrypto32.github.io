// function smoothScroll(tgt, duration) {
//   var target = document.getElementById(tgt);
//   var targetPosition = target.getBoundingClientRect().top;
//   var startPosition = window.pageYOffset;
//   var distance = targetPosition - startPosition;
//   var startTime = null;
//   console.log(targetPosition);
//   console.log(startPosition);

//   function animationScroll(currentTime) {
//     if (startTime === null) startTime = currentTime;
//     var timeElapsed = currentTime - startTime;
//     var run = ease(timeElapsed,startPosition,distance,duration);
//     window,scrollTo(0,run)

//     if(timeElapsed < duration) requestAnimationFrame(animationScroll);
//   }

//  function ease(t, b, c, d) {
//     t /= d / 2;
//     if (t < 1) return c / 2 * t * t + b;
//     t--;
//     return -c / 2 * (t * (t - 2) - 1) + b;
//   }

//   requestAnimationFrame(animationScroll);
//   console.log(targetPosition);
// }

// var navbar_nav= document.getElementById("navbar-nav")
// var site_banner_nav = document.getElementById("site-banner-nav")
// var about_nav = document.getElementById("about-nav")
// var skills_nav =document.getElementById("skills-nav")
// var blog_nav =document.getElementById("blog-nav")
// var experience_nav =document.getElementById("blog-nav")
// var contact_nav = document.getElementById("contact-nav")

// navbar_nav.addEventListener('click',function(){
 
//   smoothScroll('navbar',1000)
// })
// site_banner_nav.addEventListener('click',function(){
//   smoothScroll('site-banner',1000)
// })
// about_nav.addEventListener('click',function(){
//   console.log("clickerd")
//   smoothScroll('about-info',1000)
// })
// skills_nav.addEventListener('click',function(){
//   smoothScroll('skills',1000)
// })
// blog_nav.addEventListener('click',function(){
//   smoothScroll('blog',1000)
// })
// experience_nav.addEventListener('click',function(){
//   smoothScroll('experience',1000)
// })
// contact_nav.addEventListener('click',function(){
//   smoothScroll('contact',1000)
// })