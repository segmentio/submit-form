
var assert = require('assert');
var submit = require('..');

describe('submit-form', function () {

  var form;
  var action;

  beforeEach(function () {
    form = document.createElement('form');
    form.action = '#submit';
  });

  it('should not emit on native submit', function () {
    form.onsubmit = function () { assert(false); };
    form.submit();
  });

  it('should emit on submit', function (done) {
    form.onsubmit = function () { done(); };
    submit(form);
  });

});
