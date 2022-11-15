let menu_items = document.querySelector('.menu-items');
const close_btn = document.querySelector('.close-btn');
let openMenu = document.querySelector( '.menu-bar');
const menu_items2 = document.querySelectorAll('nav .menu-items li a');

function show(){
    console.log('clicked');
    menu_items.style.display = 'block';
    menu_items.style.top = '0';
}

openMenu.addEventListener('click',show);
close_btn.addEventListener('click',close);

// close menu when you click on a menu item
menu_items2.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})


function close(){
    menu_items.style.top = '-100%';
}