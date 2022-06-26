const createTitle = () => {
    const title = document.createElement('h2');
    title.classList.add('contact-title');
    title.innerText = 'Contact us!';
    return title;
}

const createDetails = () => {
    // Creates the contact details container
    const containerDiv = document.createElement('div');
    containerDiv.classList.add('contact-details');
    // Creates the title h3 element
    const title = document.createElement('h3');
    title.classList.add('contact-details-title');
    title.innerText = 'Address';
    // Creates the address p element
    const address = document.createElement('p');
    address.classList.add('contact-details-text');
    // Creates phone and email p element
    const phoneEmail = document.createElement('p');
    phoneEmail.classList.add('contact-details-text');
    // Creates a line break element
    const lineBreak = () => document.createElement('br');

    // Adds the content to the p elements
    address.append('221b Baker Street', lineBreak(), 'London', lineBreak(), 'NW1 6XE');
    phoneEmail.append('02800000000', lineBreak(), 'clarasdonuts@notarealemail.com');

    // Adds the elements to the container
    containerDiv.append(title);
    containerDiv.append(address);
    containerDiv.append(phoneEmail);

    return containerDiv;
}

const createOpenHours = () => {
    // Creates the contact details container
    const containerDiv = document.createElement('div');
    containerDiv.classList.add('contact-details');
    // Creates the title h3 element
    const title = document.createElement('h3');
    title.classList.add('contact-details-title');
    title.innerText = 'Open Hours';
    // Creates hours p element
    const hours = document.createElement('p');
    hours.classList.add('contact-details-text');
    // Creates a line break element
    const lineBreak = () => document.createElement('br');

    // Adds the content to the p element
    hours.append('Mon: 7.00am - 6.30pm', lineBreak());
    hours.append('Tue: 7.00am - 6.30pm', lineBreak());
    hours.append('Wed: 7.00am - 6.30pm', lineBreak());
    hours.append('Thu: 7.00am - 6.30pm', lineBreak());
    hours.append('Fri: 7.00am - 6.30pm', lineBreak());
    hours.append('Sat: 8.00am - 6.30pm');

    // Adds the elements to the container
    containerDiv.append(title);
    containerDiv.append(hours);

    return containerDiv;
}

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
    legend.innerText = 'Send us a message!';
    // Creates the form inputs and labels
    const nameLabel = createInputLabel('name');
    const nameInput = createInput('name', 'text');
    const emailLabel = createInputLabel('email');
    const emailInput = createInput('email', 'email');
    const messageLabel = createInputLabel('message')
    const messageInput = createTextAreaInput('message', 'textarea');
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

    // Adds the elements to the form 
    form.append(fieldset);
    form.append(btn);

    return form;
}

const createInputLabel = (name) => {
    const inputLabel = document.createElement('label');
    inputLabel.classList.add(`form-label`);
    inputLabel.setAttribute('for', `${name}-input`);
    inputLabel.innerText = name;
    return inputLabel;
}


const createInput = (name, type) => {
    const input = document.createElement('input');
    input.classList.add(`form-input`)
    input.setAttribute('type', type);
    input.setAttribute('id', `${name}-input`);
    input.setAttribute('name', `${name}-input`);
    input.setAttribute('required', 'true');
    return input
}

const createTextAreaInput = (name, type) => {
    const input = document.createElement('textarea');
    input.classList.add(`form-input-ta`)
    input.setAttribute('type', type);
    input.setAttribute('id', `${name}-input`);
    input.setAttribute('name', `${name}-input`);
    input.setAttribute('required', 'true');
    return input
}

const createContact = () => {
    const main = document.querySelector('.main');
    main.textContent = '';
    const contactContainer = document.createElement('div');
    contactContainer.classList.add('contact-container');
    const title = createTitle();
    const details = createDetails();
    const open = createOpenHours();
    const form = createForm();
    contactContainer.append(details, open, form);
    main.append(title, contactContainer);
}

export { createContact }