
describe('submit-form', function () {

  var assert = require('assert');
  var submit = require('submit-form');

  beforeEach(function () {
    this.form = document.createElement('form');
    this.form.action = '#submit';
  });

  it('should not emit on native submit', function () {
    this.form.onsubmit = function () { assert(false); };
    this.form.submit();
  });

  it('should emit on submit', function (done) {
    this.form.onsubmit = function () { done(); };
    submit(this.form);
  });

});