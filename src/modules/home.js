const createTitle = () => {
    const title = document.createElement('h2');
    title.classList.add('main-title');
    title.innerText = 'Welcome to Clara\'s Donuts';
    return title;
}

const createImg = () => {
    const img = document.createElement('img')
    img.classList.add('main-img')
    img.setAttribute('src', './assets/donut.png');
    img.setAttribute('alt', '');
    return img;
}

const createHome = () => {
    const main = document.querySelector('.main');
    main.textContent = '';
    const title = createTitle();
    const img = createImg();
    main.append(title, img);
}

export { createHome }