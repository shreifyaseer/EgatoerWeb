// select Element

// start scroll function 
let nav = document.querySelector('.nav');

// add and minus function
let adds = document.querySelectorAll('.asked-box');

// scrolling function
let scrolling = document.querySelector('.scrolling');

// navbar options 
let navBar = document.querySelector('.nav .links');
let btnOpen = document.querySelector('.nav .btn-open');
let btnClose = document.querySelector('.nav .btn-close');

// startCount function
let section = document.querySelector('.section');
let nums = document.querySelectorAll('.about-box .num');
let started = false // function started ? no

// select elemant
// start scroll function 
window.onscroll = function () { 
    if (scrollY > 0) {
        nav.style.background = '#424890'
    } else {
        nav.style.background = 'transparent'
    }
}
// end scroll function

// add and minus function
adds.forEach((add) => {
    add.addEventListener("click", () => {
        // add class open from contaneir div
        add.classList.toggle("open");
        //change icon
        let iconsAdd = document.querySelectorAll(".icons i");
        if (iconsAdd.className = 'fa-solid fa-plus') {
            iconsAdd.className = 'fa-solid fa-minus';
        }
    })
})
// add and minus function


// start scrolling aniamtions
window.addEventListener('scroll', () => {
    scrollY >= 200 ? scrolling.classList.add('show') : scrolling.classList.remove('show');
});

scrolling.onclick = _ => {
    window.scrollTo({
        top: 0,
        behavior:"smooth"
    });
}
// end scrolling aniamtions

// navbar options 

//open NavBar
btnOpen.addEventListener('click', () => {
    navBar.style.display = 'block';
    btnOpen.style.display = 'none';
    btnClose.style.display = 'block';
});

// close navBar
btnClose.onclick = () => {
    navBar.style.display = 'none';
    btnOpen.style.display = 'block';
    btnClose.style.display = 'none';
} 


// navbar options

nums.forEach((num) => startCount((num)));

function startCount(el) {
    let goal = el.dataset.goal;
    let count = setInterval(() => {
        el.textContent++;
        if(el.textContent == goal) {
            clearInterval(count);
        }
    }, 1500 / goal);
}
// cout function