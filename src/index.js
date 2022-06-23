import { createPageLayout } from './modules/page-load.js';
import { createHome } from './modules/home.js';
import { createMenu } from './modules/menu.js';
import { createContact } from './modules/contact.js';

createPageLayout();
createHome();

const nav = (() => {
    const navBtns = document.querySelectorAll('.nav-list-link');
    navBtns.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            switch (index) {
                case 0:
                    createHome();
                    break;
                case 1:
                    createMenu();
                    break;
                case 2:
                    createContact();
                    break;
            };
        });
    });
})();

// createHome();
// createContact();
// createMenu();
