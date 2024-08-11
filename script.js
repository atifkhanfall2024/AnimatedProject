
   
 
 
 function animations(){
var t1 = gsap.timeline({
    scrollTrigger:{
        trigger:"#home" , 
        start:"top top" ,
        scrub:1 ,
     //  markers:true ,
        pin:true,
        end:"bottom -250%"
    }
}) 

t1.to(" #circle #top img" , {
    scale:0 ,
    rotate:"-180deg" ,
    duration:1 ,
    stagger:.1 ,
    ease:Power1 ,
} ,"Hello")

t1.to(" #img img" , {
    scale:0 ,
    duration:1 ,
    stagger:.1 ,
    ease:Power1 ,
} ,"Hello")
t1.to(" #centerimg h5" , {
    scale:0 ,
    duration:1 ,
    stagger:.1 ,
    ease:Power1 ,
} ,"Hello")
t1.to(" #circle" , {
    scale:.1,
    duration:1 ,
    stagger:.1 ,
    ease:Power1 ,
} ,"Hello")
t1.to(" #smallcircle" , {
    scale:0,
    duration:2 ,
    stagger:.1 ,
    ease:Power1 ,
}  , "hi")
t1.to(" #circle" , {
    scale:0,
    duration:1 ,
    stagger:.1 ,
    ease:Power1 ,
} , "hi" )
t1.to(" #overlay h1" , {
    scale:1.2,
    bottom: "-50%",
    delay:.8,
    duration:1 ,
    stagger:.1 ,
    ease:Power1 ,
} ,"Hello")
t1.to(" #gola" , {
    scale:2,
    top: "50%",
   
    duration:2 ,
    stagger:.1 ,
    ease:Power1 ,
} ,"Hello")

t1.to(" #gola" , {
   
   
    opacity:0 ,
    duration:1 ,
    stagger:.1 ,
    ease:Power1 ,
} ,"hi")

t1.to("#pinkfare" ,{
    bottom:"10%",
    duration:.5 ,
    stagger:.1 ,
    ease:Power1 ,
    rotate:0

} , "hi")

t1.to("#rectangle" ,{
    top: "0%",
    duration:3 ,
    stagger:.1 ,
    ease:Power1 ,

} ,"hi")
t1.to("#rectangle" ,{
    top: "-50%",
    duration:2 ,
    stagger:.1 ,
    ease:Power1 ,

} )
 }
 animations()
 
 const date = new Date()
   
   
 document.querySelector("#digits h5").innerHTML = date.toLocaleString()



 const p1 = gsap.timeline({
    scrollTrigger:{
        trigger:"#second",
        scrub:3 ,
      //  markers:true,
        start:"top top",
         end:"bottom -150%",
        pin:true,
    }
 })

 p1.to(".circles",{
    top:"50%"
    ,
    stagger:.2 ,
    ease:Power1 ,
 })
 p1.to(".circles",{
   left:"50%",
    stagger:.2 ,
    ease:Power1 ,
 })
 p1.to(".purple",{
    opacity:0 ,
    ease:Power1 ,
 })
 p1.to(".pink",{
    scale:15,
     stagger:.2 ,
     ease:Power1 ,
  })
  p1.to(".pink" ,{
    background:" linear-gradient(to right ,#d5a7b4 ,#d5a7b4 ,#0db7f5 )",
    ease:Power1 ,

  })
  p1.to("#btmtop h1" ,{
    left:"-100%" ,
    duration:5 ,
    ease:Power1 ,
  } ,"a")
  p1.to("#one",{
    opacity:0 ,
    delay:1 ,
    ease:Power1 
  } ,"a")
  p1.to("#two",{
    opacity:1,
    delay:1.1 ,
   
    ease:Power1 
  }  , "a")

   
