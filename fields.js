const createSection = (section) => {
  let container = document.createElement('div');
  let title = document.createElement('h2');
  let description = document.createElement('p');

  title.textContent = section.title;
  description.textContent = section.description;

  container.setAttribute('class', 'section');
  container.appendChild(title);
  container.appendChild(description);

  document.querySelector('#form-wrapper').appendChild(container);
};

const createTextField = (textField, onChange) => {
  let inpTxtBox = document.createElement('div');

  let labelTxt = document.createElement('label');
  let inputTxt = document.createElement('input');
  labelTxt.textContent = textField.label;
  inputTxt.id = textField.id;
  inputTxt.type = textField.type;

  inpTxtBox.appendChild(labelTxt);
  inpTxtBox.appendChild(inputTxt);

  document.querySelector('#form-wrapper').appendChild(inpTxtBox);
};

const createProductField = (product, onClick) => {
  let productBox = document.createElement('div');
  let checkBoxTitleContainer = document.createElement('div');
  let checkBox = document.createElement('input');
  let productTitle = document.createElement('label');
  let productPrice = document.createElement('div');

  checkBoxTitleContainer.setAttribute('class', 'checkbox-box');
  productBox.setAttribute('class', 'product-row');
  productPrice.setAttribute('class', 'price-box');

  checkBox.type = 'checkbox';
  checkBox.id = product.id;
  productPrice.textContent = product.price + '€';
  productTitle.textContent = product.title;

  checkBoxTitleContainer.appendChild(checkBox);
  checkBoxTitleContainer.appendChild(productTitle);
  productBox.appendChild(checkBoxTitleContainer);
  productBox.appendChild(productPrice);

  document.querySelector('#form-wrapper').appendChild(productBox);
};

export const fieldsMap = {
  section: createSection,
  text: createTextField,
  product: createProductField,
};
