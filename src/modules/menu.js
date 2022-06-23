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
    ['Box of 6', 'Your choice of any 6 donuts!', '£10', './assets/box-6.jpg'],
    ['Box of 12', 'Your choice of any 12 donuts!', '£15', './assets/box-12.jpg'],
    ['Classic Ring', 'A classic ring donut with glaze or sugar on top', '£2', './assets/classic-ring.jpg'],
    ['Classic Filled', 'A classic filled donut with powdered sugar on top and a jam or custard filling', '£2', './assets/classic-filled.jpg'],
    ['Chocolate Ring', 'A ring donut dipped in chocolate with your choice of topping', '£2.50', './assets/choc-ring.jpg'],
    ['Chocolate Filled', 'A filled donut dipped in chocolate with your choice of topping and filling', '£2.50', './assets/choc-filled.jpg'],
    ['Colourful Ring', 'A ring donut dipped in a variety of icing colours and your choice of topping', '£2.50', './assets/icing-ring.jpg'],
    ['Colourful Filled', 'A filled donut dipped in a variety of icing colours and your choice of topping and filling', '£2.50', './assets/icing-filled.jpg'],
];

const createMenu = () => {
    const main = document.querySelector('.main');
    main.textContent = '';
    const title = createTitle();
    main.append(title);
    // Loops through the array and appends each item to the page
    menuItems.forEach((item) => {
        const thisItem = createItem(item[0], item[1], item[2], item[3]);
        main.append(thisItem);
    });
};

export { createMenu }