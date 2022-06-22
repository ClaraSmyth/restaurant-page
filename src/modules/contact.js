const createTitle = () => {
    const title = document.createElement('h2');
    title.classList.add('contact-title');
    title.innerText = 'Contact us!';
    return title;
}

const createImg = () => {
    const img = document.createElement('img')
    img.classList.add('contact-img')
    img.setAttribute('src', 'https://placehold.co/400');
    img.setAttribute('alt', '');
    return img;
}

const createContact = () => {
    const main = document.querySelector('.main');
    const title = createTitle();
    const img = createImg();
    main.append(title, img);
}

export { createContact }