const pageContent = document.querySelector('#content')

const createHeader = () => {
    // Creates the header element
    const header = document.createElement('header');
    header.classList.add('header');

    // Creates the h1 element
    const title = document.createElement('h1');
    title.classList.add('header-title');
    title.innerText = 'Clara\'s Donuts';

    // Creates the nav element
    const nav = document.createElement('nav');
    nav.classList.add('header-nav');

    //Creates the ul element within nav
    const navList = document.createElement('ul');
    navList.classList.add('nav-list');

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

const createMain = () => {
    const main = document.createElement('main');
    main.classList.add('main');

    pageContent.append(main);
}

const createFooter = () => {
    // Creates the footer element
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    // Creates the footer paragraph element
    const footerPara = document.createElement('p');
    footerPara.classList.add('footer-para');

    //Creates the footer link elements
    const footerLinkOne = createLink('Clara', 'footer-link', '#');
    const footerLinkTwo = createLink('TheOdinProject', 'footer-link', '#');

    // Adds the links to the paragraph text
    footerPara.append('Created by ', footerLinkOne, ' for ', footerLinkTwo)
    // Adds the paragraph to the footer
    footer.append(footerPara);
    // Adds the footer to the page
    pageContent.append(footer);
}

const createListItem = (name) => {
    // Creates the ul list item
    const navListItem = document.createElement('li');
    navListItem.classList.add('nav-list-item');
    // Creates the link
    const navListItemLink = createLink(name, 'nav-list-link', '#')
    // Adds the link to the li
    navListItem.append(navListItemLink);
    return navListItem;
}

const createLink = (linkText, className, hrefValue) => {
    const link = document.createElement('a');
    link.classList.add(className);
    link.setAttribute('href', hrefValue);
    link.innerText = linkText;
    return link;
}

const createPageLayout = () => {
    createHeader();
    createMain();
    createFooter();
}

export { createPageLayout };