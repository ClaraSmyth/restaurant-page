const pageContent = document.querySelector('#content')

const createHeader = () => {

    // Creates the header element
    const header = document.createElement('header');
    header.classList.add('header');

    // Creates the h1 element
    const title = document.createElement('h1');
    title.classList.add('header-title');
    title.innerText = 'Restaurant Page';

    header.append(title);

    // Creates the nav element
    const nav = document.createElement('nav');
    nav.classList.add('header-nav');

    const navList = document.createElement('ul');
    navList.classList.add('header-nav-list');
    nav.append(navList);

    header.append(nav);

    // Adds the header to the pageContent div
    pageContent.append(header);
}

export { createHeader };