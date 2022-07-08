

// document.getElementById('portfolio').addEventListener('click', function() {
//     document.documentElement.style.setProperty('--col5','#000000')
// });










// document.getElementById("portfolio").addEventListener("mouseover", changeNavbarPart1ColToDark);
// function changeNavbarPart1ColToDark(){
//     document.getElementById("logo").style.width="0%";
//     document.getElementById("nav-options").style.width="100%";
//     document.getElementById("logo").style.background="#2b2b2f";
//     document.getElementById("logo").style.transition="all"
//     document.getElementById("logo").style.transitionDuration="0.3s"

//     if(document.getElementById("navbar").addEventListener("mouseover", changeNavbarPart1width());

// }

// function changeNavbarPart1width(){
//     document.getElementById("logo").style.width="0%";
//     document.getElementById("nav-options").style.width="100%";

// }

// document.getElementById("portfolio").addEventListener("mouseout", changeNavbarPart1ColToLight);
// function changeNavbarPart1ColToLight(){
//     document.getElementById("logo").style.background="#fefefe";
//     document.getElementById("logo").style.transition="all"
//     document.getElementById("logo").style.transitionDuration="0.3s"
//     document.getElementById("logo").style.display="block";
//     document.getElementById("logo").style.width="45%";
//     document.getElementById("nav-options").style.width="55%";
// }



document.querySelector(".Navbar").addEventListener("mouseover", function(){
    document.querySelector(".Navbar").style.display="flex";;
});

document.querySelector(".portfolio").addEventListener("mouseover", function(){
    document.querySelector(".Navbar").style.display="flex";;
});

document.querySelector(".portfolio").addEventListener("mouseout", function(){
    document.querySelector(".Navbar").style.display="none";
});






document.querySelector("html").addEventListener("scroll", changeNavbar)

function changeNavbar(){
    document.getElementById("logo").style.display="none"
    document.getElementById("nav-options").style.width="100%"
}


function changetoCol1(){
    // document.querySelector("html").style.display="none";
    // root.style.setProperty("--col5","red")
}



// Skills

// 1

document.getElementById("web-beauty").addEventListener("mouseover", function(){
    document.getElementById("web-beauty").style.height="40%";
    document.getElementById("web-frontend").style.height="20%";
    document.getElementById("web-backend").style.height="20%";
    document.getElementById("uiux").style.height="20%";
    document.getElementById("web-beauty").style.transition="all";
    document.getElementById("web-beauty").style.transitionDuration="0.3s";
    
    document.getElementById("skill-part2").style.background="url('../images/web-frontend.jpg')";
    document.getElementById("skill-part2").style.backgroundSize="contain"
    document.getElementById("skill-part2").style.backgroundPosition="center"
    document.getElementById("skill-part2").style.backgroundRepeat="no-repeat"


});

document.getElementById("web-beauty").addEventListener("mouseout", function(){
    document.getElementById("web-beauty").style.height="25%";
    document.getElementById("web-frontend").style.height="25%";
    document.getElementById("web-backend").style.height="25%";
    document.getElementById("uiux").style.height="25%";
    document.getElementById("web-beauty").style.transition="all";
    document.getElementById("web-beauty").style.transitionDuration="0.3s";

    document.getElementById("skill-part2").style.background="url('../images/web-development.png')";
    document.getElementById("skill-part2").style.backgroundSize="contain"
    document.getElementById("skill-part2").style.backgroundPosition="center"
    document.getElementById("skill-part2").style.backgroundRepeat="no-repeat"

});

// 2
document.getElementById("web-frontend").addEventListener("mouseover", function(){
    document.getElementById("web-beauty").style.height="20%";
    document.getElementById("web-frontend").style.height="40%";
    document.getElementById("web-backend").style.height="20%";
    document.getElementById("uiux").style.height="20%";
    document.getElementById("web-beauty").style.transition="all";
    document.getElementById("web-beauty").style.transitionDuration="0.3s";

    document.getElementById("skill-part2").style.background="url('../images/web-frontend2.png')";
    document.getElementById("skill-part2").style.backgroundSize="contain"
    document.getElementById("skill-part2").style.backgroundPosition="center"
    document.getElementById("skill-part2").style.backgroundRepeat="no-repeat"

});

document.getElementById("web-frontend").addEventListener("mouseout", function(){
    document.getElementById("web-beauty").style.height="25%";
    document.getElementById("web-frontend").style.height="25%";
    document.getElementById("web-backend").style.height="25%";
    document.getElementById("uiux").style.height="25%";
    document.getElementById("web-frontend").style.transition="all";
    document.getElementById("web-frontend").style.transitionDuration="0.3s";

    document.getElementById("skill-part2").style.background="url('../images/web-development.png')";
    document.getElementById("skill-part2").style.backgroundSize="contain"
    document.getElementById("skill-part2").style.backgroundPosition="center"
    document.getElementById("skill-part2").style.backgroundRepeat="no-repeat"
});

// 3
document.getElementById("web-backend").addEventListener("mouseover", function(){
    document.getElementById("web-beauty").style.height="20%";
    document.getElementById("web-frontend").style.height="20%";
    document.getElementById("web-backend").style.height="40%";
    document.getElementById("uiux").style.height="20%";
    document.getElementById("web-beauty").style.transition="all";
    document.getElementById("web-beauty").style.transitionDuration="0.3s";

    document.getElementById("skill-part2").style.background="url('../images/web-backend.jpg')";
    document.getElementById("skill-part2").style.backgroundSize="contain"
    document.getElementById("skill-part2").style.backgroundPosition="center"
    document.getElementById("skill-part2").style.backgroundRepeat="no-repeat"
});

document.getElementById("web-backend").addEventListener("mouseout", function(){
    document.getElementById("web-beauty").style.height="25%";
    document.getElementById("web-frontend").style.height="25%";
    document.getElementById("web-backend").style.height="25%";
    document.getElementById("uiux").style.height="25%";
    document.getElementById("web-backend").style.transition="all";
    document.getElementById("web-backend").style.transitionDuration="0.3s";

    document.getElementById("skill-part2").style.background="url('../images/web-development.png')";
    document.getElementById("skill-part2").style.backgroundSize="contain"
    document.getElementById("skill-part2").style.backgroundPosition="center"
    document.getElementById("skill-part2").style.backgroundRepeat="no-repeat"
});

// 4
document.getElementById("uiux").addEventListener("mouseover", function(){
    document.getElementById("web-beauty").style.height="20%";
    document.getElementById("web-frontend").style.height="20%";
    document.getElementById("web-backend").style.height="20%";
    document.getElementById("uiux").style.height="40%";
    document.getElementById("web-beauty").style.transition="all";
    document.getElementById("web-beauty").style.transitionDuration="0.3s";

    document.getElementById("skill-part2").style.background="url('../images/skills.jpg')";
    document.getElementById("skill-part2").style.backgroundSize="contain"
    document.getElementById("skill-part2").style.backgroundPosition="center"
    document.getElementById("skill-part2").style.backgroundRepeat="no-repeat"
});

document.getElementById("uiux").addEventListener("mouseout", function(){
    document.getElementById("web-beauty").style.height="25%";
    document.getElementById("web-frontend").style.height="25%";
    document.getElementById("web-backend").style.height="25%";
    document.getElementById("uiux").style.height="25%";
    document.getElementById("uiux").style.transition="all";
    document.getElementById("uiux").style.transitionDuration="0.3s";

    document.getElementById("skill-part2").style.background="url('../images/web-development.png')";
    document.getElementById("skill-part2").style.backgroundSize="contain"
    document.getElementById("skill-part2").style.backgroundPosition="center"
    document.getElementById("skill-part2").style.backgroundRepeat="no-repeat"
});


// Project Sub Info


document.getElementById("seework").addEventListener("click", function(){
    if(document.getElementById("project-sub-info").style.height=="auto"){
        document.getElementById("project-sub-info").style.height="90vh";
        document.getElementById("project-sub-info").style.transition="all";
        document.getElementById("project-sub-info").style.transitionDuration="0.3s";
        document.getElementById("seework").style.transform="rotate(360deg)"
    } else{
        document.getElementById("project-sub-info").style.height="auto";
        document.getElementById("project-sub-info").style.transition="all";
        document.getElementById("project-sub-info").style.transitionDuration="0.3s";
        document.getElementById("seework").style.transform="rotate(180deg)"
    }

})


// Team & Social Media 

document.querySelector(".team-card1").addEventListener("mouseover", function(){   
    document.querySelector(".follow1").style.display = "none"; 
    document.querySelector(".social1").style.display = "block";
});
document.querySelector(".team-card1").addEventListener("mouseout", function(){
    document.querySelector(".follow1").style.display = "block"; 
    document.querySelector(".social1").style.display = "none";
});


document.querySelector(".team-card2").addEventListener("mouseover", function(){   
    document.querySelector(".follow2").style.display = "none"; 
    document.querySelector(".social2").style.display = "block";
});
document.querySelector(".team-card2").addEventListener("mouseout", function(){
    document.querySelector(".follow2").style.display = "block"; 
    document.querySelector(".social2").style.display = "none";
});

document.querySelector(".team-card3").addEventListener("mouseover", function(){   
    document.querySelector(".follow3").style.display = "none"; 
    document.querySelector(".social3").style.display = "block";
});
document.querySelector(".team-card3").addEventListener("mouseout", function(){
    document.querySelector(".follow3").style.display = "block"; 
    document.querySelector(".social3").style.display = "none";
});

document.querySelector(".team-card4").addEventListener("mouseover", function(){   
    document.querySelector(".follow4").style.display = "none"; 
    document.querySelector(".social4").style.display = "block";
});
document.querySelector(".team-card4").addEventListener("mouseout", function(){
    document.querySelector(".follow4").style.display = "block"; 
    document.querySelector(".social4").style.display = "none";
});

document.querySelector(".team-card5").addEventListener("mouseover", function(){   
    document.querySelector(".follow5").style.display = "none"; 
    document.querySelector(".social5").style.display = "block";
});
document.querySelector(".team-card5").addEventListener("mouseout", function(){
    document.querySelector(".follow5").style.display = "block"; 
    document.querySelector(".social5").style.display = "none";
});

document.querySelector(".team-card6").addEventListener("mouseover", function(){   
    document.querySelector(".follow6").style.display = "none"; 
    document.querySelector(".social6").style.display = "block";
});
document.querySelector(".team-card6").addEventListener("mouseout", function(){
    document.querySelector(".follow6").style.display = "block"; 
    document.querySelector(".social6").style.display = "none";
});


// clicks


document.querySelector(".follow1").addEventListener("click", function(){   
    document.querySelector(".follow1").style.display = "none"; 
    document.querySelector(".social1").style.display = "block";
});
document.querySelector(".follow2").addEventListener("click", function(){   
    document.querySelector(".follow2").style.display = "none"; 
    document.querySelector(".social2").style.display = "block";
});
document.querySelector(".follow3").addEventListener("click", function(){   
    document.querySelector(".follow3").style.display = "none"; 
    document.querySelector(".social3").style.display = "block";
});
document.querySelector(".follow4").addEventListener("click", function(){   
    document.querySelector(".follow4").style.display = "none"; 
    document.querySelector(".social4").style.display = "block";
});
document.querySelector(".follow5").addEventListener("click", function(){   
    document.querySelector(".follow5").style.display = "none"; 
    document.querySelector(".social5").style.display = "block";
});
document.querySelector(".follow6").addEventListener("click", function(){   
    document.querySelector(".follow6").style.display = "none"; 
    document.querySelector(".social6").style.display = "block";
});
document.querySelector(".team-card1").addEventListener("click", function(){   
    document.querySelector(".follow1").style.display = "none"; 
    document.querySelector(".social1").style.display = "block";
});


// Media Links

document.querySelector(".linkedin").addEventListener("mouseover", function(){
    // document.querySelector(".linkedin").src="https://img.icons8.com/ios-filled/500/228BE6/linkedin-circled--v1.png";
});


document.querySelector(".github").addEventListener("mouseover", function(){
    // document.querySelector(".github").src="https://img.icons8.com/ios-filled/500/1A1A1A/github.png";
});


document.querySelector(".instagram").addEventListener("mouseover", function(){
    // document.querySelector(".instagram").src="../images/instagram-hover.gif";
});




// Colors


// document.querySelector(".color-arrow").addEventListener("click", function(){

//     if(document.querySelector(".colors").style.display === "none"){
//         document.querySelector(".colors").style.display="none";
//     }
//     else{
//         document.querySelector(".colors").style.display="flex";
//     }
// });


document.getElementById("df5646").addEventListener("click", function(){
    document.documentElement.style.setProperty('--col5','#df5646');
    document.documentElement.style.transition="all";
    document.documentElement.style.transitionDuration="2s";
    document.querySelector(".changing-colors").style.visibility = "hidden";
});
document.getElementById("ecb132").addEventListener("click", function(){
    document.documentElement.style.setProperty('--col5','#ecb132');
    document.documentElement.style.transition="all";
    document.documentElement.style.transitionDuration="2s";
    document.querySelector(".changing-colors").style.visibility = "hidden";
});
document.getElementById("fdfb2").addEventListener("click", function(){
    document.documentElement.style.setProperty('--col5','#3fdfb2');
    document.documentElement.style.transition="all";
    document.documentElement.style.transitionDuration="2s";
    document.querySelector(".changing-colors").style.visibility = "hidden";
});
document.getElementById("aeec").addEventListener("click", function(){
    document.documentElement.style.setProperty('--col5','#32aeec');
    document.documentElement.style.transition="all";
    document.documentElement.style.transitionDuration="2s";
    document.querySelector(".changing-colors").style.visibility = "hidden";
});
document.getElementById("ea2b45").addEventListener("click", function(){
    document.documentElement.style.setProperty('--col5','#ea2b45');
    document.documentElement.style.transition="all";
    document.documentElement.style.transitionDuration="2s";
    document.querySelector(".changing-colors").style.visibility = "hidden";
});
document.getElementById("E9F3D").addEventListener("click", function(){
    document.documentElement.style.setProperty('--col5','#4E9F3D');
    document.documentElement.style.transition="all";
    document.documentElement.style.transitionDuration="2s";
    document.querySelector(".changing-colors").style.visibility = "hidden";
});



document.getElementById("white").addEventListener("click", function(){
    if (document.querySelector(".changing-colors").style.visibility != "visible") {
        document.querySelector(".changing-colors").style.visibility = "visible";
        // document.querySelector(".colors").style.background = "black";
    }
    else{
        document.querySelector(".changing-colors").style.visibility = "hidden";
        // document.querySelector(".colors").style.background = "transparent";
    }
    
});




// 


documentElement.querySelector(".social").a.img.addEventListener("click",function(){
    alert("Sorry,\nLink Havent Uploaded Yet.");
});



