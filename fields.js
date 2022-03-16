import { products } from './config';

const createSection = (section) => {
  let container = document.createElement('div');
  let title = document.createElement('h1');
  let description = document.createElement('p');

  title.textContent = section.title;
  description.textContent = section.description;

  container.setAttribute('class', 'section');
  container.appendChild(title);
  container.appendChild(description);

  container.appendChild(createTextField(section.fields));
  container.appendChild(createProductField(section.fields));

  document.querySelector('#form-wrapper').appendChild(container);
};

const createTextField = (textField, onChange) => {
  let inpTxtBox = document.createElement('div');
  textField.forEach((field) => {
    if (field.type === 'text') {
      let labelTxt = document.createElement('label');
      let inputTxt = document.createElement('input');
      labelTxt.innerText = field.label;
      inputTxt.id = field.id;
      inputTxt.type = field.type;

      inpTxtBox.appendChild(labelTxt);
      inpTxtBox.appendChild(inputTxt);
    }
  });

  return inpTxtBox;
};

const createProductField = (product, onClick) => {
  let productBox = document.createElement('div');

  product.forEach((prod) => {
    if (prod.type !== 'text') {
      let checkBox = document.createElement('input');
      let productPrice = document.createElement('div');
      let productTitle = document.createElement('div');

      checkBox.type = 'checkbox';
      checkBox.id = prod.id;
      productPrice.innerText = prod.price + '€';
      productTitle.innerText = prod.title;

      productBox.appendChild(checkBox);
      productBox.appendChild(productTitle);
      productBox.appendChild(productPrice);
    }
  });

  return productBox;
};

export const fieldsMap = {
  section: createSection,
  text: createTextField,
  product: createProductField,
};
