import { config, products, validationRules } from './config';
import { fieldsMap } from './fields';
import './style.css';

const formNode = document.getElementById('form-wrapper');
const registerButton = document.getElementById('register-button');
const data = {};
let invalidFields = [];
let sum = 0;

const onChange = (id, value) => {
  value.trim() !== '' ? (data[id] = value) : delete data[id];
};
const onClick = (product) => {
  if (!data.products) data.products = [];

  if (data.products.includes(product.title)) {
    sum -= product.price;
    data.products = data.products.filter((item) => {
      return item != product.title;
    });
    if (!data.products.length) delete data.products;
  } else {
    data.products.push(product.title);
    sum += product.price;
  }
};

const isValid = (ruleId, rules, invalidFields) => {
  const rulesArray = Object.entries(rules);
  rulesArray.every(([ruleType, ruleValue]) => {
    if (ruleType === 'required' && ruleValue) {
      if (!data[ruleId]) invalidFields.push(` ${ruleId} is a required field`);
      return !!data[ruleId];
    }
    if (ruleType === 'includes') {
      data[ruleId].includes(ruleValue)
        ? true
        : invalidFields.push(`${ruleId} must include ${ruleValue}`);
      return !!data[ruleId].includes(ruleValue);
    }
    if (ruleType === 'min') {
      if (data[ruleId].length < ruleValue)
        invalidFields.push(
          `${ruleId} must be at least ${ruleValue} characters long`
        );
      return !!data[ruleId].length >= ruleValue;
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
  validationFields();
  if (invalidFields.length) {
    alert(invalidFields);
    invalidFields = [];
  } else {
    let registration = Object.entries(data).join('\n').replace(/,/g, ': ');
    alert(
      `Thanks for registering!!! \n\n` + registration + `\n\n Total: ${sum}€`
    );
  }
};

function validationFields() {
  validationRules.forEach(function ([id, rule]) {
    isValid([id], rule, invalidFields);
  });
}
