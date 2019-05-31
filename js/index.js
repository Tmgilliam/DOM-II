// Your code goes here

// Prevent Default

const navLink = document.querySelector('.nav a');
navLink.addEventListener('click', function(prevent){
    prevent.preventDefault();
})


// Window Resize Header Tags


// Fun Bus Logo Hover

const headerTags = document.querySelector('h1');

headerTags.addEventListener('mouseenter', function(event){
  event.target.style.opacity = 0;
})

headerTags.addEventListener('mouseleave', function(event){
  event.target.style.opacity = 1;
})

// Mouse up to highlight nav items green
const homeNav = document.querySelector('.nav');
homeNav.addEventListener('mouseup', function() {
    homeNav.style.background = 'purple';
})

const intro = document.querySelector('#funbus')
intro.addEventListener('dblclick',() => {
TweenMax.from("#funbus", 1, {x:300, opacity:0, scale:0.5});
})

const signupbtn = document.querySelectorAll('.btn')
signupbtn.forEach( function(btn){
    btn.addEventListener('mouseenter', function(){
        btn.style.background='hotpink';
    })
    btn.addEventListener('mouseleave', function(){
        btn.style.background = '#17A2B8';
      })
})

const body = document.querySelector('body')
body.addEventListener('keydown', function(){
    body.onmouseup = function() {mouseUp()};
})
console.log(body)
console.log(signupbtn)



// * [x] `mouseover`
// * [x ] `keydown`
// * [ ] `wheel`
// * [ ] `drag / drop`
// * [ ] `load`
// * [ ] `focus`
// * [ ] `resize`
// * [ ] `scroll`
// * [ ] `select`
// * [x ] `dblclick`

// * [ ] Nest two similar events somewhere in the site and prevent the event propagation properly
// * [ x] Stop the navigation from items from refreshing the page by using `preventDefault()`