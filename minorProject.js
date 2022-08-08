function show(){
    gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
ScrollTrigger.refresh();
}
show()

document.querySelector("#menu").addEventListener("click",function(){
    document.querySelector("#fullScreenNav").style.left=0
})
document.querySelector("#menu1").addEventListener("click",function(){
    document.querySelector("#fullScreenNav").style.left="-100vw"
})

gsap.from("#left>h1",{
  onStart :function(){
    $('#left>h1').textillate({
       in: { effect: 'fadeInUp' } 
    });
  },
  opacity:0,
  duration:0.5
})
gsap.from("#text>h1",{
  scrollTrigger:{
    trigger:"#text>h1",
    scroller:"#main",
    // markers:true,
    start:"top 70%",
    // end:"top 20%"
  },
  // onStart :function(){
  //   $('#text>h1').textillate({
  //      in: { effect: 'fadeInUp' } 
  //   });
  // },
  opacity:0,
  
  duration:0.5
})
gsap.from("#page2>h1",{
  scrollTrigger:{
    trigger:"#page2>h1",
    scroller:"#main",
    // markers:true,
    start:"top 70%",
    // end:"top 20%"
  },
  onStart :function(){
    $('#page2>h1').textillate({
       in: { effect: 'fadeInUp' } 
    });
  },
  opacity:0,
  duration:0.5,
})
gsap.from("#pImg>img",{
  scrollTrigger:{
    trigger:"#pImg>img",
    scroller:"#main",
    // markers:true,
    start:"top 90%",
    // end:"top 20%"
  },
  rotateX:"-90deg",
  opacity:0,
  duration:1.5,
})

gsap.from("#p0Img>img",{
  scrollTrigger:{
    trigger:"#p0Img>img",
    scroller:"#main",
    // markers:true,
    start:"top 70%",
    // end:"top 20%"
    // scrub:2
  },
  rotateX:"-90deg",
  opacity:0,
  duration:1.5,
})
gsap.from("#p1Img>img",{
  scrollTrigger:{
    trigger:"#p1Img>img",
    scroller:"#main",
    // markers:true,
    start:"top 90%",
    // end:"top 20%"
  },
  rotateX:"-90deg",
  opacity:0,
  duration:1.5,
})
gsap.from("#p2Img>img",{
  scrollTrigger:{
    trigger:"#p2Img>img",
    scroller:"#main",
    // markers:true,
    start:"top 90%",
    // end:"top 20%"
  },
  rotateX:"-90deg",
  opacity:0,
  duration:1.5,
})

gsap.from("#page5>h1",{
  scrollTrigger:{
    trigger:"#page5>h1",
    scroller:"#main",
    // markers:true,
    start:"top 70%",
    // end:"top 20%"
  },
  onStart :function(){
    $('#page5>h1').textillate({
       in: { effect: 'fadeInUp' } 
    });
  },
  opacity:0,
  duration:0.5,
})

gsap.to("#right img",{
  y:"-100vh",
  duration:4,
  repeat:-1,
  ease: Power0.easeNone

})
gsap.to("#pic img",{
  // y:"-100vh",
  rotate:"360deg",
  duration:8,
  repeat:-1,
  ease: Power0.easeNone

})

document.querySelector("#pImg").addEventListener("mouseenter",function(){
  document.querySelector("#pImg img").style.transform = "scale(1.05)"
})
document.querySelector("#pImg").addEventListener("mouseleave",function(){
  document.querySelector("#pImg>img").style.transform = "scale(1)"
})

var circle = document.querySelector("#circle")
document.querySelector("#main").addEventListener("mousemove",function(dets){
    circle.style.top = `${dets.y}px`
    circle.style.left = `${dets.x}px`
})