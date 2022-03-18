import { config, products, validationRules } from './config';
import { fieldsMap } from './fields';
import './style.css';

const formNode = document.getElementById('form-wrapper');
const registerButton = document.getElementById('register-button');
const data = {};
const onChange = (id, value) => {
  !data[id] ? (data[id] = value) : delete data[id];
};
const onClick = (product) => {
  if (!data.products) data.products = [];

  if (data.products.includes(product)) {
    data.products = data.products.filter((item) => {
      return item != product;
    });
  } else {
    data.products.push(product);
  }
};
const isValid = (value, rules) => {
  const rulesArray = Object.entries(rules);

  return rulesArray.every(([ruleType, ruleValue]) => {
    if (ruleType === 'required' && ruleValue) {
      return !!value;
    }
    if (ruleType === 'includes') {
      return value.includes(ruleValue);
    }
    if (ruleType === 'min') {
      return value.length >= ruleValue;
    }
    return true;
  });
};

config.forEach((confItem) => {
  let section = fieldsMap.section(confItem);
  formNode.appendChild(section);
  confItem.fields.forEach((field) => {
    switch (field.type) {
      case 'text':
        let textField = fieldsMap.text(field, onChange);
        section.appendChild(textField);
        break;
      case 'product':
        const allProducts = products.find((product) => product.id === field.id);
        let productField = fieldsMap.product(allProducts, onClick);
        section.appendChild(productField);
        break;
    }
  });
});

registerButton.onclick = function onSubmit(e) {
  e.preventDefault();

  alert(Object.entries(data).join('\n').replace(/,/g, ': '));
};

function validationFields() {
  invalidFields = [];
  validationRules.forEach(function ([id, value]) {
    if (!isValid(data[id], value)) {
      invalidFields.push(id);
    }
    return invalidFields;
  });
}
