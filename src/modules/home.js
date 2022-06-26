import { createMenu } from "./menu.js";

const createTitle = () => {
    const title = document.createElement('h2');
    title.classList.add('main-title');
    title.innerText = 'Welcome!';
    return title;
}

const createDesc = () => {
    const para = document.createElement('p');
    const lineBreak = document.createElement('br');
    para.classList.add('main-para');
    para.append('We hand make our donuts everyday with fresh ingredients!', lineBreak, 'Check out our menu to see our standard range of donuts. Each day we also make a variety of unique specialty donuts that aren\'t shown on our menu so come visit our store to see what\'s available today!');
    return para;
}

const createBtn = () => {
    const btn = document.createElement('button');
    btn.classList.add('main-btn', 'nav-list-link');
    btn.append(imgOne, 'Menu!', imgTwo);
    btn.addEventListener('click', () => {
        createMenu();
    });
    return btn;
}

const createHome = () => {
    const main = document.querySelector('.main');
    main.textContent = '';
    const mainContentContainer = document.createElement('div');
    mainContentContainer.classList.add('main-content-container');
    const title = createTitle();
    const img = createImg('main-img-one', './assets/donut.png');
    const imgTwo = createImg('main-img-two', './assets/donut-2.png');
    const para = createDesc();
    const btn = createBtn();

    mainContentContainer.append(para, img, imgTwo);
    main.append(title, mainContentContainer, btn);
}

export { createHome }