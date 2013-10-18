
var trigger = require('trigger-event');


/**
 * Expose `submitForm`.
 */

module.exports = submitForm;


/**
 * Submit a `form` programmatically, triggering submit handlers.
 *
 * @param {Element} form
 */

function submitForm (form) {
  var button = document.createElement('button');
  button.style.display = 'none';
  form.appendChild(button);
  trigger(button, 'click');
  form.removeChild(button);
}