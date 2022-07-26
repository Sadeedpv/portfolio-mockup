window.onload = () => {
    // Preloading js
    preload();
    // nightmode();
    backtotop();
    submitted();
    // tilt();
    blankout();
    blankin();
    display();
}
function preload(){
    var content = document.querySelector('.precontent');
    var real_content = document.querySelector('.totalbody');
    content.style.opacity = '0';
    content.style.display = 'none';
    real_content.style.display = 'unset';    
}

function nightmode(){
    document.querySelector(".night-mode").onclick = () => {
        alert( `Dark mode under construction! Please bear with us.`)
    }
}
// no space to scroll top if button clicked

function backtotop(){
    document.querySelector(".hamburger").onclick = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }
}

function submitted(){
    var submitted = document.querySelector('.animated-button');
    submitted.addEventListener('click', () => {
        submitted.style.backgroundColor = 'rgb(70, 160, 84)';        
        submitted.style.borderRadius = '50%';
        submitted.style.fontSize = '0.5rem';
        document.querySelector('.submit').style.display = "none";
        document.querySelector('.tick').style.display = "block";
        document.querySelector('.future-fill').textContent = "Submitted!";
    })

}

function tilt(){
    let img = document.querySelectorAll('.tilting');
    let row = document.querySelector('.futureadd');

    let n = 0;
    setInterval(() => {
        img.forEach((e) => {
            let rect = e.getBoundingClientRect();
            if (rect.x > window.innerWidth){
                alert('yes')
                // let image = document.createElement("img");
                // image.setAttribute("src", e.src);
                e.style.right = `100 + ${n}%`;
                // n = 0;


            } 

            e.style.left = `${n}px`; 

        })
        n++;
    }, 25)
}


function warned(){
    const p = document.getElementById('warn');
    p.innerHTML = "Sorry, Project details are not yet available !";
}

function blankout(){
    lst_of_welcome = ['Willkommen!', 'Bienvenue !', 'स्वागत हे', 'Hoşgeldiniz', 'καλως ΗΡΘΑΤΕ', 'أهلا بك', '欢迎', 'Welcome']
    var logo = document.querySelector('.entry');
    logo.style.display = 'block';
    logo.style.height = `${1 * window.innerHeight}px`;
    if (window.innerWidth < 992){
        logo.style.paddingBottom = '4em';
    }
    // logo.style.transition = 'cubic-bezier(.55,.05,.5,.75)';


    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    document.querySelectorAll('.enter').forEach(element => {
        element.style.display = 'none'        ;
    });

    document.body.style.overflowY = "hidden";
    let i = 0;
    setInterval(() => {
        if (i < lst_of_welcome.length){
            logo.innerHTML = ` ${lst_of_welcome[i]} .`;
            i++;
        }
        
    }, 200);
    

}

function blankin(){
    setTimeout(() => {
        var logo = document.querySelector('.entry');
        logo.style.height = '0px';
        logo.style.paddingBottom = '0em';
        // logo.style.transition = 'cubic-bezier(.55,.05,.5,.75)';
        // logo.style.display = 'none';

        document.body.style.overflowY = "scroll";
        document.querySelectorAll('.enter').forEach(element => {
            element.style.display = 'block';
        });
                
    }, 4000)
}


function display(){
}


window.onscroll = () => {
    buttonvisual();
    fill();
    tilted();
    slideleft();

    if (window.innerWidth > 992){
        fadein();
        slideright();  
        rotated();              
    }

}
// Disappear the button if no space to scroll top
function buttonvisual(){
    let btn = document.querySelector(".hamburger");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        btn.style.display = "block";
    }
    else{
        btn.style.display = "none";
    }
}

// Fade in by changing Y direction and opacity
function fadein(){
    let fade = document.querySelector(".service");
    let fade2 = document.querySelector(".skills");
    let fade3 = document.querySelector(".contact");
    let fade4 = document.querySelector(".projects");
    if (document.body.scrollTop >1000 || document.documentElement.scrollTop > 1000){
        fade.style.transform = "translateY(0%)";
        fade.style.opacity = "100%";
    }
    if (document.body.scrollTop >1800 || document.documentElement.scrollTop > 1800){
        fade2.style.transform = "translateY(0%)";
        fade2.style.opacity = "100%";
    }
    if (document.body.scrollTop >3800 || document.documentElement.scrollTop > 3800){
        fade3.style.transform = "translateY(0%)";
        fade3.style.opacity = "100%";
    }
    if (document.body.scrollTop >3200 || document.documentElement.scrollTop > 3200){
        fade4.style.transform = "translateY(0%)";
        fade4.style.opacity = "100%";
    }
}
// Slide left and right on scroll

function slideleft(){
    const h4 = document.querySelector(".head-quote");
    let scrolled = document.documentElement.scrollTop;
    if (scrolled > 500){
        scrolled = scrolled - 450;
        scrolled = (scrolled/10)/2;
        h4.style.transform =`translate(${scrolled}%)`
    }

}

function slideright(){
    const head = document.querySelector('.title');
    const span = document.querySelector('.slide2');
    let scrolling = document.documentElement.scrollTop;
    scrolling = (scrolling/10)/2;
    head.style.transform = `translateX(${scrolling}%)`;
    span.style.transform = `translateX(-${scrolling}%)`;

}

function rotated(){
    const rotated = document.querySelector(".rotated");
    let onscrolled = document.documentElement.scrollTop;
    if (onscrolled > 224){
        // rotated.style.transform = `rotate(180deg)`;
        rotated.style.opacity = `0`;
    }
    else{
        // rotated.style.transform = "translateX(30%) rotate(90deg)";
        rotated.style.opacity = "1";
    }
}

function fill(){
    const topbar = document.querySelector(".bg");
    let percent = document.documentElement.scrollTop;
    percent = (percent/10)/4;
    topbar.style.width = `${percent}%`;
}

function tilted(){
    let offset_top = document.documentElement.scrollTop;
    let imge = document.querySelectorAll('.tilting');
    offset_top = (offset_top / 10);

    imge.forEach((e) => {
        e.style.transform  =`translateX(${offset_top}%)`;

    })
}

