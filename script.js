let menu_items = document.querySelector('.menu-items');
let close_btn = document.querySelector('.close-btn');
let openMenu = document.querySelector( '.menu-bar');
let menu_items2 = document.querySelectorAll('nav .menu-items li a');

openMenu.addEventListener('click',show);
close_btn.addEventListener('click',close);

// close menu when you click on a menu item
menu_items2.forEach(item => {
    item.addEventListener('click',function(){
        close();
    })
})

function show(){
    menu_items.style.display = 'block';
    menu_items.style.top = '0';
}

function close(){
    menu_items.style.top = '-100%';
}


// Project arrays

let headProject =
    {
        headTitle: 'Multi-Post Stories',
        headImg: 'display.png',
        headDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
        headLanguages: ['css','html','bootstrap','Ruby'],
        liveLink: 'https://amanworku.github.io/Aman-Worku-s-Portfolio/',
        projLink: 'https://github.com/AmanWorku/Aman-Worku-s-Portfolio.git',
    };

const headTitle = document.querySelector('.describing-block .title');
const headImg = document.querySelector('.img-poster');
const headDesc = document.querySelector('.head-desc');
const headLanguages = document.querySelector('.head-languages');


let tech_lang = '';
headProject.headLanguages.forEach((projTech) =>
{
    tech_lang = tech_lang + `<li>${projTech}</li>`;
});

headTitle.innerHTML = headProject.headTitle;
headImg.src = 'images/' + headProject.headImg;
headDesc.innerHTML = headProject.headDesc;
headLanguages.innerHTML = tech_lang;

document.querySelector('.describing-block .btn').addEventListener('click', ()=>
{
    modalTitle.innerHTML = headProject.headTitle;
    modalDesc.innerHTML = headProject.headDesc;
    modalLanguages.innerHTML = tech_lang;
    modalImg.src = 'images/' + headProject.headImg;
    modalLive.setAttribute("href", headProject.liveLink);
    modalProj.setAttribute("href", headProject.projLink);

    modal.style.display = 'flex';
})


let projDetails = [
    {
        projId: '1',
        projTitle: 'Professional Art Printing Data More',
        projDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
        projImg: 'modal-img.png',
        projTech: ['html', 'bootstrap', 'ruby'],
        liveLink: 'https://amanworku.github.io/Aman-Worku-s-Portfolio/',
        projLink: 'https://github.com/AmanWorku/Aman-Worku-s-Portfolio.git',
        projBg: 'url(\'images/cards-bg.png\')'
    },
    {
        projId: '2',
        projTitle: 'Data Dashboard Healthcare',
        projDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
        projImg: 'modal-img.png',
        projTech: ['html', 'bootstrap', 'ruby'],
        liveLink: 'https://amanworku.github.io/Aman-Worku-s-Portfolio/',
        projLink: 'https://github.com/AmanWorku/Aman-Worku-s-Portfolio.git',
        projBg: 'url(\'images/cards-bg.png\')'
    },
    {
        projId: '3',
        projTitle: 'Data Dashboard Healthcare',
        projDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
        projImg: 'modal-img.png',
        projTech: ['html', 'bootstrap', 'ruby'],
        liveLink: 'https://amanworku.github.io/Aman-Worku-s-Portfolio/',
        projLink: 'https://github.com/AmanWorku/Aman-Worku-s-Portfolio.git',
        projBg: 'url(\'images/cards-bg.png\')'
    },
    {
        projId: '4',
        projTitle: 'Profesional Art Printing Data More',
        projDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
        projImg: 'modal-img.png',
        projTech: ['html', 'bootstrap', 'ruby'],
        liveLink: 'https://amanworku.github.io/Aman-Worku-s-Portfolio/',
        projLink: 'https://github.com/AmanWorku/Aman-Worku-s-Portfolio.git',
        projBg: 'url(\'images/cards-bg.png\')'
    },
    {
        projId: '5',
        projTitle: 'Data Dashboard Healthcare',
        projDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
        projImg: 'modal-img.png',
        projTech: ['html', 'bootstrap', 'ruby'],
        liveLink: 'https://amanworku.github.io/Aman-Worku-s-Portfolio/',
        projLink: 'https://github.com/AmanWorku/Aman-Worku-s-Portfolio.git',
        projBg: 'url(\'images/cards-bg.png\')'
    },
    {
        projId: '6',
        projTitle: 'Data Dashboard Healthcare',
        projDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
        projImg: 'modal-img.png',
        projTech: ['html', 'bootstrap', 'ruby'],
        liveLink: 'https://amanworku.github.io/Aman-Worku-s-Portfolio/',
        projLink: 'https://github.com/AmanWorku/Aman-Worku-s-Portfolio.git',
        projBg: 'url(\'images/cards-bg.png\')'
    }
];

const card = document.querySelectorAll('.card');
const cardTitle = document.querySelectorAll('.card-title');
const cardLang = document.querySelectorAll('.languages')
const cardDesc = document.querySelectorAll('.card-desc');
const cardSeeProj = document.querySelectorAll('.see-proj-btn');
const modal = document.querySelector(".desk-modal-container");
const modalTitle = document.querySelector('.mod-head-title');
const modalLanguages = document.querySelector('.mod-languages')
const modalDesc = document.querySelector('.mod-desc');
const modalImg = document.querySelector('.mod-img');
const modalLive = document.querySelector('.live-link');
const modalProj = document.querySelector('.proj-link');

card.innerHtml = '';

for (let i = 0; i < projDetails.length; i++){
    cardTitle[i].innerHTML = projDetails[i].projTitle;
    cardDesc[i].innerHTML = projDetails[i].projDesc;
    let tech_lang = '';
    projDetails[i].projTech.forEach((projTech) =>
    {
        tech_lang = tech_lang + `<li>${projTech}</li>`;
    });
    cardLang[i].innerHTML = tech_lang;
    cardSeeProj[i].innerHTML = `<button class="btn-2 proj-mod-${i}">See Project</button>`;
}

