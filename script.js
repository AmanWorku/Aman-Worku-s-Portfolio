const menuItems = document.querySelector('.menu-items');
const closeBtn = document.querySelector('.close-btn');
const openMenu = document.querySelector('.menu-bar');
const menuItems2 = document.querySelectorAll('nav .menu-items li a');

function show() {
  menuItems.style.display = 'block';
  menuItems.style.top = '0';
}

function close() {
  menuItems.style.top = '-100%';
}

openMenu.addEventListener('click', show);
closeBtn.addEventListener('click', close);

// close menu when you click on a menu item
menuItems2.forEach((item) => {
  item.addEventListener('click', () => {
    close();
  });
});

// Project arrays

const headProject = {
  headTitle: 'Multi-Post Stories',
  headImg: 'display.png',
  headDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
  headLanguages: ['css', 'html', 'bootstrap', 'Ruby'],
  liveLink: 'https://amanworku.github.io/Aman-Worku-s-Portfolio/',
  projLink: 'https://github.com/AmanWorku/Aman-Worku-s-Portfolio.git',
};

const headTitle = document.querySelector('.describing-block .title');
const headImg = document.querySelector('.img-poster');
const headDesc = document.querySelector('.head-desc');
const headLanguages = document.querySelector('.head-languages');

let techLang = '';
headProject.headLanguages.forEach((projTech) => {
  techLang = `${techLang}<li>${projTech}</li>`;
});

headTitle.innerHTML = headProject.headTitle;
headImg.src = `images/${headProject.headImg}`;
headDesc.innerHTML = headProject.headDesc;
headLanguages.innerHTML = techLang;

const projDetails = [
  {
    projId: '1',
    projTitle: 'Professional Art Printing Data More',
    projDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    projImg: 'modal-img.png',
    projTech: ['html', 'bootstrap', 'ruby'],
    liveLink: 'https://amanworku.github.io/Aman-Worku-s-Portfolio/',
    projLink: 'https://github.com/AmanWorku/Aman-Worku-s-Portfolio.git',
    projBg: 'url(\'images/cards-bg.png\')',
  },
  {
    projId: '2',
    projTitle: 'Data Dashboard Healthcare',
    projDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    projImg: 'modal-img.png',
    projTech: ['html', 'bootstrap', 'ruby'],
    liveLink: 'https://amanworku.github.io/Aman-Worku-s-Portfolio/',
    projLink: 'https://github.com/AmanWorku/Aman-Worku-s-Portfolio.git',
    projBg: 'url(\'images/cards-bg.png\')',
  },
  {
    projId: '3',
    projTitle: 'Data Dashboard Healthcare',
    projDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    projImg: 'modal-img.png',
    projTech: ['html', 'bootstrap', 'ruby'],
    liveLink: 'https://amanworku.github.io/Aman-Worku-s-Portfolio/',
    projLink: 'https://github.com/AmanWorku/Aman-Worku-s-Portfolio.git',
    projBg: 'url(\'images/cards-bg.png\')',
  },
  {
    projId: '4',
    projTitle: 'Profesional Art Printing Data More',
    projDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    projImg: 'modal-img.png',
    projTech: ['html', 'bootstrap', 'ruby'],
    liveLink: 'https://amanworku.github.io/Aman-Worku-s-Portfolio/',
    projLink: 'https://github.com/AmanWorku/Aman-Worku-s-Portfolio.git',
    projBg: 'url(\'images/cards-bg.png\')',
  },
  {
    projId: '5',
    projTitle: 'Data Dashboard Healthcare',
    projDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    projImg: 'modal-img.png',
    projTech: ['html', 'bootstrap', 'ruby'],
    liveLink: 'https://amanworku.github.io/Aman-Worku-s-Portfolio/',
    projLink: 'https://github.com/AmanWorku/Aman-Worku-s-Portfolio.git',
    projBg: 'url(\'images/cards-bg.png\')',
  },
  {
    projId: '6',
    projTitle: 'Data Dashboard Healthcare',
    projDesc: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry\'s standard',
    projImg: 'modal-img.png',
    projTech: ['html', 'bootstrap', 'ruby'],
    liveLink: 'https://amanworku.github.io/Aman-Worku-s-Portfolio/',
    projLink: 'https://github.com/AmanWorku/Aman-Worku-s-Portfolio.git',
    projBg: 'url(\'images/cards-bg.png\')',
  },
];
const cards = document.querySelector('.cards');
const modal = document.querySelector('.desk-modal-container');
const modalTitle = document.querySelector('.mod-head-title');
const modalLanguages = document.querySelector('.mod-languages');
const modalDesc = document.querySelector('.mod-desc');
const modalImg = document.querySelector('.mod-img');
const modalLive = document.querySelector('.live-link');
const modalProj = document.querySelector('.proj-link');

document.querySelector('.describing-block .btn').addEventListener('click', () => {
  modalTitle.innerHTML = headProject.headTitle;
  modalDesc.innerHTML = headProject.headDesc;
  modalLanguages.innerHTML = techLang;
  modalImg.src = `images/${headProject.headImg}`;
  modalLive.setAttribute('href', headProject.liveLink);
  modalProj.setAttribute('href', headProject.projLink);

  modal.style.display = 'flex';
});

cards.innerHTML = '';

for (let i = 0; i < projDetails.length; i++) {
  let techLang = '';
  projDetails[i].projTech.forEach((projTech) => {
    techLang = `${techLang}<li>${projTech}</li>`;
  });

  cards.innerHTML += `<div class="card">
            <h4 class="card-title">${projDetails[i].projTitle}</h4>
            <p class="card-desc">${projDetails[i].projDesc}</p>
            <div class="tags">
                <ul class="languages">
                ${techLang}
                </ul>
            </div>
            <div class="see-proj-btn"><button class="btn-2 proj-mod-${i}">See Project</button></div>
        </div>`;
}

// popup code

for (let i = 0; i < projDetails.length; i++) {
  document.querySelector(`.proj-mod-${i}`).addEventListener('click', () => {
    let techLang = '';
    projDetails[i].projTech.forEach((projTech) => {
      techLang = `${techLang}<li>${projTech}</li>`;
    });
    modalTitle.innerHTML = projDetails[i].projTitle;
    modalDesc.innerHTML = projDetails[i].projDesc;
    modalLanguages.innerHTML = techLang;
    modalImg.src = `images/${projDetails[i].projImg}`;
    modalLive.setAttribute('href', projDetails[i].liveLink);
    modalProj.setAttribute('href', projDetails[i].projLink);

    modal.style.display = 'flex';
  });
}

// Pop up closing code

const closeProj = document.querySelector('.close-btn2');
closeProj.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Form validation

function emailValidator() {
  const EMAIL_INVALID = 'Please enter a correct email address format';
  const email = document.getElementById('email').value;
  const emailRegx = /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

  document.forms[0].onsubmit = function (event) {
    if (emailRegx.test(email)) {
      document.getElementById('submit-message').innerHTML = 'Success!';
      document.getElementById('submit-message').style.color = 'green';
    } else {
      document.getElementById('submit-message').innerHTML = EMAIL_INVALID;
      document.getElementById('submit-message').style.color = 'red';
      event.preventDefault();
    }
  };
}
