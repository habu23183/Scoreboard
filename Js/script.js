window.onscroll = () => {
    if (window.scrollY > 80) {
        document.querySelector(".header").classList.add('active');
    } else {
        document.querySelector(".header").classList.remove('active');
    }
}

window.addEventListener("resize", function() {
    if (window.innerWidth < 768) {
        document.querySelector(".img-box").classList.remove('active');
    };
});


let pop = document.getElementById('popUp');
let rightNav = document.querySelector('.right_nav')
let closebtn = document.getElementById('closebtn');
pop.addEventListener('click', () => {
    rightNav.classList.add('active');
    nav[0].classList.remove('active');
});
closebtn.onclick = () => {

        rightNav.classList.remove('active');

    }
    /*Menu open*/

let menu = document.getElementsByClassName('menu');
let nav = document.getElementsByClassName('left_nav');
menu[0].onclick = () => {
    nav[0].classList.add('active');
    rightNav.classList.remove('active');
}


/*Menu close*/

let close = document.getElementsByClassName('close');
let cross = document.getElementById('cross');

close[0].onclick = () => {

    nav[0].classList.remove('active');

}


let ImgBox = document.querySelector(".main-img");
let imgWrap = document.querySelector(".img-wrap");
let topImg = document.getElementById("topImg");
let line = document.getElementById("line");


topImg.style.width = ImgBox.offsetWidth + "px";
let leftSpace = ImgBox.offsetLeft;
ImgBox.onmousemove = (e) => {
    let boxwidth = (e.pageX - leftSpace) + "px";
    imgWrap.style.width = boxwidth;
    line.style.left = boxwidth;
}