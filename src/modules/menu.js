const createTitle = () => {
    const title = document.createElement('h2');
    title.classList.add('menu-title');
    title.innerText = 'Menu';
    return title;
}

const createImg = () => {
    const img = document.createElement('img')
    img.classList.add('menu-img')
    img.setAttribute('src', 'https://placehold.co/400');
    img.setAttribute('alt', '');
    return img;
}

const createMenu = () => {
    const main = document.querySelector('.main');
    const title = createTitle();
    const img = createImg();
    main.append(title, img);
}

export { createMenu }