const pageContent = document.querySelector('#content')

const createHeader = () => {

    // Creates the header element
    const header = document.createElement('header');
    header.classList.add('header');

    // Creates the h1 element
    const title = document.createElement('h1');
    title.classList.add('header-title');
    title.innerText = 'Restaurant Page';

    // Creates the nav element
    const nav = document.createElement('nav');
    nav.classList.add('header-nav');

    //Creates the ul element within nav
    const navList = document.createElement('ul');
    navList.classList.add('header-nav-list');

    //Creates the li elements within the ul
    const home = createListItem('Home');
    const menu = createListItem('Menu');
    const contact = createListItem('Contact');

    // Adds the nav li items to the ul
    navList.append(home, menu, contact);
    // Adds the nav ul to the nav element 
    nav.append(navList);
    // Adds the title and nav to the header
    header.append(title);
    header.append(nav);
    // Adds the header to the pageContent div
    pageContent.append(header);
}

const createListItem = (name) => {
    //Creates the ul list item
    const navListItem = document.createElement('li');
    navListItem.classList.add('header-nav-list-item');
    navListItem.innerText = name;
    return navListItem;
}

export { createHeader };