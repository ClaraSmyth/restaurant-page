const createTitle = () => {
    const title = document.createElement('h2');
    title.classList.add('menu-title');
    title.innerText = 'Menu';
    return title;
}

const createItem = (itemTitle, itemDesc, itemPrice, itemImg) => {
    // Creates the container div
    const container = document.createElement('div');
    container.classList.add('menu-item-container');
    // Creates the Item title
    const title = document.createElement('h3');
    title.classList.add('menu-item-title');
    // Creates the Item text content
    const desc = document.createElement('p');
    desc.classList.add('menu-item-text');
    // Creates the Item price
    const price = document.createElement('p');
    price.classList.add('menu-item-price');
    // Creates the Img
    const img = createImg(itemImg);

    // Adds the content to the elements
    title.innerText = itemTitle;
    desc.innerText = itemDesc;
    price.innerText = itemPrice;

    // Adds the elements to the container
    container.append(img);
    container.append(title);
    container.append(desc);
    container.append(price);

    return container;
}

const createImg = (imgPath) => {
    const img = document.createElement('img')
    img.classList.add('menu-img')
    img.setAttribute('src', imgPath);
    img.setAttribute('alt', '');
    return img;
}

const menuItems = [
    ['Classic Ring', 'A classic ring donut with glaze or sugar on top', '$2', 'https://placehold.co/400'],
    ['Classic Filled', 'A classic filled donut with powdered sugar on top and a jam or custard filling', '$2', 'https://placehold.co/400'],
    ['Test', 'This is a test', '$2', 'https://placehold.co/400'],
    ['Test', 'This is a test', '$2', 'https://placehold.co/400'],
    ['Test', 'This is a test', '$2', 'https://placehold.co/400'],
    ['Test', 'This is a test', '$2', 'https://placehold.co/400'],
];

const createMenu = () => {
    const main = document.querySelector('.main');
    const title = createTitle();
    main.append(title);
    
    const createMenuItems = (() => {
        menuItems.forEach((item) => {
            const thisItem = createItem(item[0], item[1], item[2], item[3]);
            main.append(thisItem);
        });
    })();
};

export { createMenu }