import { config, products, validationRules } from './config';
import { fieldsMap } from './fields';
import './style.css';

const formNode = document.getElementById('dynamic-form');
const registerButton = document.getElementById('register-button');

registerButton.onclick = function onSubmit() {
  // Register button
};

config.forEach((confItem) => {
  fieldsMap.section(confItem);
});
