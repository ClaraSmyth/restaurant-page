const createTitle = () => {
    const title = document.createElement('h2');
    title.classList.add('contact-title');
    title.innerText = 'Contact us!';
    return title;
}

// const createImg = () => {
//     const img = document.createElement('img')
//     img.classList.add('contact-img')
//     img.setAttribute('src', 'https://placehold.co/400');
//     img.setAttribute('alt', '');
//     return img;
// }

const createForm = () => {
    // Creates the form element
    const form = document.createElement('form');
    form.classList.add('contact-form');
    // Creates the form fieldset
    const fieldset = document.createElement('fieldset');
    fieldset.classList.add('form-fieldset');
    // Creates the fieldset legend
    const legend = document.createElement('legend');
    legend.classList.add('form-legend');
    // Creates the form inputs and labels
    const nameLabel = createInputLabel('name');
    const nameInput = createInput('name', 'text');
    const emailLabel = createInputLabel('email')
    const emailInput = createInput('email', 'email');
    const messageLabel = createInputLabel('message')
    const messageInput = createInput('message', 'textarea');
    // Creates the submit button
    const btn = document.createElement('button');
    btn.classList.add('form-btn');
    btn.setAttribute('type', 'submit');
    btn.innerText = 'Submit';

    // Adds the legend, inputs and labels to the fieldset
    fieldset.append(legend);
    fieldset.append(nameLabel, nameInput);
    fieldset.append(emailLabel, emailInput);
    fieldset.append(messageLabel, messageInput);
    // Adds the fieldset to the form 
    form.append(fieldset);
    // Adds the button to the form
    form.append(btn);

    return form;
}

const createInputLabel = (name) => {
    const inputLabel = document.createElement('label');
    inputLabel.classList.add(`${name}-label`);
    inputLabel.setAttribute('for', `${name}-label`);
    inputLabel.innerText = name;
    return inputLabel;
}


const createInput = (name, type) => {
    const input = document.createElement('input');
    input.classList.add(`${name}-label`)
    input.setAttribute('type', type);
    input.setAttribute('id', `${name}-label`);
    input.setAttribute('name', `${name}-label`);
    return input
}

const createContact = () => {
    const main = document.querySelector('.main');
    const title = createTitle();
    const form = createForm();
    // const img = createImg();
    main.append(title, form);
}

export { createContact }