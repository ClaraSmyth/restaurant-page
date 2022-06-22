const createTitle = () => {
    const title = document.createElement('h2');
    title.classList.add('main-title');
    title.innerText = 'Welcome to restaurant';
    return title;
}

const createImg = () => {
    const img = document.createElement('img')
    img.classList.add('main-img')
    img.setAttribute('src', 'https://placehold.co/400');
    img.setAttribute('alt', '');
    return img;
}

const createHome = () => {
    const main = document.querySelector('.main');
    const title = createTitle();
    const img = createImg();
    main.append(title, img);
}

export { createHome }