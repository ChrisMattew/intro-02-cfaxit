const createSection = (section) => {
  let container = document.createElement('div');
  container.setAttribute('class', 'section');

  section.fields.forEach((field) => {
    if (field.type === 'text') {
      container.appendChild(createTextField(field));
    } else {
      container.appendChild(createProductField(field));
    }
  });
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
  return inpTxtBox;
};

const createProductField = (product, onClick) => {
  let productBox = document.createElement('div');
  let checkBox = document.createElement('input');
  let productPrice = document.createElement('div');
  let productTitle = document.createElement('div');

  checkBox.type = 'checkbox';
  checkBox.id = product.id;
  productPrice.innerText = product.price + '€';
  productTitle.innerText = product.title;

  productBox.appendChild(checkBox);
  productBox.appendChild(productTitle);
  productBox.appendChild(productPrice);

  return productBox;
};

export const fieldsMap = {
  section: createSection,
  text: createTextField,
  product: createProductField,
};
