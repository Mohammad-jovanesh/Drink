
// var scene = document.getElementById('scene');
// var parallax = new Parallax(scene);
var Tl_1,Tl_2;
Tl_2=gsap.timeline({paused:true});
Tl_2.from('.Logo2',{duration:0.5,opacity:0,x:-100})
.staggerFrom('.NavBar2 ul li',0.5,{duration:0.3,opacity:0,y:-50,ease: Expo.easeInOut},0.1)
.from('.Search_Icon2 i',{duration:0.5,opacity:0,y:50,ease: Expo.easeInOut},0.3)
.from('.Account2',{duration:0.5,opacity:0,y:50,ease: Expo.easeInOut},0.5)
.from('.Shoppin_icon2',{duration:0.5,opacity:0,y:50,ease: Expo.easeInOut},0.8)
.from('.Captoin_Big2 ',{duration:0.5,opacity:0,y: 100,ease: Expo.easeInOut})
.from('.Find_juice2',{duration:0.5,opacity:0,y: 100,ease: Expo.easeInOut})
.from('.Info_text2',{duration:0.5,opacity:0,y: 100,ease: Expo.easeInOut})
.from('.juice2 img',{duration:0.5,opacity:0,y:-800,ease: Expo.easeInOut})
.staggerFrom('.leaves_Section .leaves img',0.5,{duration:0.5,opacity:0,y:-800,ease: Expo.easeInOut},0.1);
 


Tl_1=gsap.timeline({paused:true});
Tl_1.from('.Logo',{duration:0.5,opacity:0,x:-100})
.staggerFrom('.NavBar ul li',0.5,{duration:0.3,opacity:0,y:-50,ease: Expo.easeInOut},0.1)
.from('.Search_Icon i',{duration:0.5,opacity:0,y:50,ease: Expo.easeInOut},0.3)
.from('.Account',{duration:0.5,opacity:0,y:50,ease: Expo.easeInOut},0.5)
.from('.Shoppin_icon',{duration:0.5,opacity:0,y:50,ease: Expo.easeInOut},0.8)
.from('.Captoin_Big ',{duration:0.5,opacity:0,y: 100,ease: Expo.easeInOut})
.from('.Find_juice',{duration:0.5,opacity:0,y: 100,ease: Expo.easeInOut})
.from('.Info_text',{duration:0.5,opacity:0,y: 100,ease: Expo.easeInOut})
.from('.juice img',{duration:0.5,opacity:0,y:-800,ease: Expo.easeInOut})
.staggerFrom('.leaves_Section .leaves img',0.5,{duration:0.5,opacity:0,y:-800,ease: Expo.easeInOut},0.1);
 


$(document).ready(()=>
{
    Tl_1.play();
  
   
})




$('.owl-carousel').owlCarousel({
    loop:true,
    center: true,
    nav:true,
    items:1,
    margin:20,
    singleItem:true,
    navText:[
        "Next","Prev"
    ],
    onTranslated :()=>{
        console.log(" onTranslated")
       
        Tl_1.play();
},
    onTranslate :()=>{
       console.log(" onTranslate")
       Tl_1.pause(0,true)
   
    },
    onDrag:()=>{
        console.log("drag");
        
    },
    onChange :()=>{
        console.log("onChange")
    }
})