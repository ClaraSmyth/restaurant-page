const createTitle = () => {
    const title = document.createElement('h2');
    title.classList.add('main-title');
    title.innerText = 'Welcome!';
    return title;
}

const createImg = () => {
    const img = document.createElement('img')
    img.classList.add('main-img')
    img.setAttribute('src', './assets/donut.png');
    img.setAttribute('alt', '');
    return img;
}

const createDesc = () => {
    const para = document.createElement('p');
    const lineBreak = document.createElement('br');
    para.classList.add('main-para');
    para.append('We hand make our donuts everyday with fresh ingredients!', lineBreak, 'Check out our menu to see our standard range of donuts. Each day we also make a variety of unique specialty donuts that aren\'t shown on our menu so come visit our store to see what is available today!');
    return para;
}

const createHome = () => {
    const main = document.querySelector('.main');
    main.textContent = '';
    const title = createTitle();
    const img = createImg();
    const para = createDesc();
    main.append(title, img, para);
}

export { createHome }