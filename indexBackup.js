import { config, products, validationRules } from './config';
import { fieldsMap } from './fields';
import './style.css';

const formNode = document.getElementById('form-wrapper');
const registerButton = document.getElementById('register-button');

registerButton.onclick = function onSubmit() {
  var data = {};
  var inputs = document.querySelectorAll('input');
  inputs.forEach((input) => {
    data[input.id] = input.value;
  });
  let newData = Object.fromEntries(
    Object.entries(data).filter(([_, v]) => v != '')
  );
  alert(JSON.stringify(newData));
};
registerButton.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(data);
});
const data = {};
const onChange = (id, value) => {
  if (!data[id]) {
    data[id] = value;
    return;
  }
  delete data[id];
};

config.forEach((confItem) => {
  let section = fieldsMap.section(confItem);
  formNode.appendChild(section);
  confItem.fields.forEach((field) => {
    if (field.type === 'text') {
      let textField = fieldsMap.text(field, onChange);
      section.appendChild(textField);
      return;
    }
    products.forEach((product) => {
      if (field.id === product.id) {
        let productField = fieldsMap.product(product);
        section.appendChild(productField);
        return;
      }
    });
  });
});
