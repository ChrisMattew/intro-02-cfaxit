const createSection = (section) => {
  let container = document.createElement('div');
  let descriptionBox = document.createElement('div');
  let title = document.createElement('h2');
  let description = document.createElement('p');

  container.setAttribute('class', 'section');
  descriptionBox.setAttribute('class', 'description-box');

  descriptionBox.appendChild(title);
  descriptionBox.appendChild(description);
  container.appendChild(descriptionBox);

  title.textContent = section.title;
  description.textContent = section.description;

  return container;
};

const createTextField = (textField, onChange) => {
  let inpTxtBox = document.createElement('div');
  let labelTxt = document.createElement('label');
  let inputTxt = document.createElement('input');

  inpTxtBox.setAttribute('class', 'input-box');

  labelTxt.textContent = textField.label;
  labelTxt.setAttribute('for', textField.id);
  inputTxt.id = textField.id;
  inputTxt.name = textField.id;
  inputTxt.type = textField.type;

  inpTxtBox.appendChild(labelTxt);
  inpTxtBox.appendChild(inputTxt);

  inputTxt.addEventListener('change', function () {
    onChange(textField.id, this.value);
  });

  return inpTxtBox;
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
  checkBox.name = product.id;
  productPrice.textContent = product.price + '€';
  productTitle.textContent = product.title;
  productTitle.setAttribute('for', product.id);

  checkBoxTitleContainer.appendChild(checkBox);
  checkBoxTitleContainer.appendChild(productTitle);
  productBox.appendChild(checkBoxTitleContainer);
  productBox.appendChild(productPrice);

  checkBox.addEventListener('change', () => {
    onClick(product);
  });
  return productBox;
};

export const fieldsMap = {
  section: createSection,
  text: createTextField,
  product: createProductField,
};
