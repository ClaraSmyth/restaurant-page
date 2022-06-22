const createTitle = () => {
    const main = document.querySelector('.main');
    const title = document.createElement('h2');
    title.classList.add('main-title');
    title.innerText = 'Welcome to restaurant';

    const img = document.createElement('img')
    img.classList.add('main-img')
    img.setAttribute('src', 'https://placehold.co/400');
    img.setAttribute('alt', '');

    main.append(title, img);
}

export { createTitle }