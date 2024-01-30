function smoothscoll(){
    // const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });
gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});

// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}
smoothscoll()


function cursorMover(){
    let p1content = document.querySelector(".p1content")
let crsr = document.querySelector(".cursor")


// p1content.addEventListener("mousemove",function(dets){
//    crsr.style.left = dets.x +"px"
//    crsr.style.top = dets.y +"px"
// })

p1content.addEventListener("mousemove",function(dets){
gsap.to(crsr,{
 x:dets.x,
 y:dets.y
})
})
p1content.addEventListener("mouseenter",function(dets){
gsap.to(crsr,{
scale:1,
opacity:1
})
})
p1content.addEventListener("mouseleave",function(dets){
gsap.to(crsr,{
scale:0,
opacity:0
})
})
}
cursorMover()

function page2Anim(){
    gsap.from(".ptext h1",{
        y:120,
        stagger:0.25,
        duration:1,
        scrollTrigger:{
            trigger:"#page2",
            scroller:"#main",
            start:"top 40%",
            end:"top 37%",
            // markers:true,
            scrub:2
        }
    })
}
page2Anim()


function cursorMover1(){
    let content = document.querySelector("#page5")
let crsr1 = document.querySelector(".cursr1")

content.addEventListener("mousemove",function(dets){
gsap.to(crsr1,{
 x:dets.x,
 y:dets.y
})
})
content.addEventListener("mouseenter",function(dets){
gsap.to(crsr1,{
scale:1,
opacity:1
})
})
content.addEventListener("mouseleave",function(dets){
gsap.to(crsr1,{
scale:0,
opacity:0
})
})
}
cursorMover1()

// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 1,
//   spaceBetween: 30,
//   loop: true,
//   autoplay: {
//     delay: 2500,
//     disableOnInteraction: true,
//   },
// });

function sliderAnim(){
  var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 5500,
      disableOnInteraction: false,
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
}
sliderAnim()

let tl = gsap.timeline()
tl.from("#loader h3",{
  x:40,
  opacity:0,
  duration:1,
  stagger:.1
})
tl.to("#loader h3",{
  opacity:0,
  x:-10,
  stagger:.1,
  duration:1
})
tl.to("#loader",{
  opacity:0
})

tl.from(".p1content h1 span",{
  y:100,
  opacity:0,
  stagger:0.2,
  duration:0.5,
  delay:-0.5
})
tl.to("#loader",{
 display:"none"
})















