var x = window.matchMedia("(max-width: 700px)")


if(x.matches){
  document.getElementById("message").setAttribute('cols',"20");
  document.getElementById("message").setAttribute('rows',"2");
}

function menuPageWordsAnim(){
  gsap.from(".social-line ul li",{
    scale:0,
    opacity:0,
    delay:2
  })
  gsap.from(".link-words ul li a",{
  opacity:0,
  })
}
var checkBox =  document.getElementById("checkbox");
function checkBoxAnim(){
  
  var spanDiv1Span1 =  document.querySelectorAll(".spandiv1 span")[0];
  var spanDiv1Span2 =  document.querySelectorAll(".spandiv1 span")[1];
  var spanDiv2Span1 =  document.querySelectorAll(".spandiv2 span")[0];
  var spanDiv2Span2 =  document.querySelectorAll(".spandiv2 span")[1];
  var tl = gsap.timeline();
  if(checkBox.checked){
    document.querySelector(".hamburger").style.border = "0.5px solid black";
    spanDiv2Span1.style.backgroundColor = "black";
    spanDiv2Span2.style.backgroundColor = "black";
  // wrapper.style.overflow = "hidden";
   function openMenu(){
      if(!x.matches){
        tl
        .to(spanDiv1Span1,{
                translateX:"100%",
                durtion:0.01
        })
        .to(spanDiv1Span2,{
                translateX:"-100%",
                durtion:0.01
        })
        
        .to(".menupage",{
                translateY:"100%",
              })
              .fromTo(spanDiv2Span1,{
                width:0
         },{
                 translateX:"0",
                 width:57,
                 durtion:0.01
         })
.fromTo(spanDiv2Span2,{
                width:0,
        },{
                translateX:"0",
                width:57,
                durtion:0.01
        })
      

      }
      else{
        tl
        .to(spanDiv1Span1,{
                translateX:"100%",
                durtion:0.01
        })
        .to(spanDiv1Span2,{
                translateX:"-100%",
                durtion:0.01
        })
        
        .to(".menupage",{
                translateY:"100%",
              })
              .fromTo(spanDiv2Span1,{
                width:0
         },{
                 translateX:"0",
                 width:45,
                 durtion:0.01
         })
.fromTo(spanDiv2Span2,{
                width:0,
        },{
                translateX:"0",
                width:45,
                durtion:0.01
        })
      }
        
  }
   openMenu();
   menuPageWordsAnim()
  }
  else if(!checkBox.checked){
          function closeMenu(){
            document.querySelector(".hamburger").style.border = "0.5px solid white";
                  tl
                  .to(spanDiv2Span1,{
                          translateX:"-120%",
                          width:0,
                          durtion:0.01
                  })
                  .to(spanDiv2Span2,{
                          translateX:"120%",
                          durtion:0.01,
                          width:0,
                  })
          tl.to(spanDiv1Span1,{
                  translateX:"0",
                  durtion:0.01,
                  delay:.3
          })
          tl.to(spanDiv1Span2,{
                  translateX:"0",
                  durtion:0.01
          })
          gsap.to(".menupage",{
          translateY:"-100%",
          duration:1,
          delay:0.9,
        })
         
          }
          closeMenu();
  }
  loadingMenuPageAnim();
}


function stickyCursor(){

}


function loaderAnim(){
  

var tl = gsap.timeline();
gsap.from(".page1",{
  opacity:0,
  delay:1
})
tl.from(".loader",{
  left:"100%"
})
tl.fromTo(".loader-text",{
x:200,
opacity:0,
duration:2,
},{
  x:0,
  opacity:1,
  duration:2,
})
tl.fromTo(".loader-eyes",{
  opacity:0,
  scale:0
},{
  opacity:1,
  scale:1,
  duration:3
})
tl.to(".loader",{
  left:"-100%",
  delay:1
})



}

loaderAnim();






function menupageAnimClick(){
  var menuWords = document.querySelectorAll(".link-words ul li");
  var value = checkBox.checked;
  menuWords.forEach((e)=>{
    e.addEventListener("click",()=>{
        checkBox.checked = checkBox.unchecked;
        checkBoxAnim();
    })
  })
}


menupageAnimClick();






//paste this code under the head tag or in a separate js file.
	// Wait for window load
	$(window).load(function() {
		// Animate loader off screen
		$(".loader").fadeOut("slow");;
	});



 