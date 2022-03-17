import { config, products, validationRules } from './config';
import { fieldsMap } from './fields';
import './style.css';

const formNode = document.getElementById('dynamic-form');
const registerButton = document.getElementById('register-button');

registerButton.onclick = function onSubmit() {
  var data = {};
  var inputs = document.querySelectorAll('input');
  inputs.forEach((input) => {
    data[input.id] = input.value;
  });
  let o = Object.fromEntries(Object.entries(data).filter(([_, v]) => v != ''));
  alert(JSON.stringify(o));
};

config.forEach((confItem) => {
  fieldsMap.section(confItem);
  confItem.fields.forEach((field) => {
    if (field.type === 'text') {
      fieldsMap.text(field);
      return false;
    }
    products.forEach((product) => {
      if (field.id === product.id) {
        fieldsMap.product(product);
        return false;
      }
    });
  });
});
