const createSection = (section) => {
  let container = document.createElement('div');
  let title = document.createElement('h1');
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
  labelTxt.innerText = textField.label;
  inputTxt.id = textField.id;
  inputTxt.type = textField.type;

  inpTxtBox.appendChild(labelTxt);
  inpTxtBox.appendChild(inputTxt);

  document.querySelector("#form-wrapper").appendChild(inpTxtBox);
};

const createProductField = (product, onClick) => {
  let productBox = document.createElement('div');

  let checkBox = document.createElement('input');
  let productTitle = document.createElement('div');
  let productPrice = document.createElement('div');
  

  checkBox.type = 'checkbox';
  checkBox.id = product.id;
  productPrice.innerText = product.price + '€';
  productTitle.innerText = product.title;

  productBox.appendChild(checkBox);
  productBox.appendChild(productTitle);
  productBox.appendChild(productPrice);

  document.querySelector("#form-wrapper").appendChild(productBox);
};

export const fieldsMap = {
  section: createSection,
  text: createTextField,
  product: createProductField,
};
