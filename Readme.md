
# submit-form

  Submit a form programmatically, triggering its submit handlers, since the native `submit` method doesn't...

## Installation

    $ npm install @segment/submit-form

## Example

```js
var submit = require('@segment/submit-form');
var form = document.querySelector('form');

form.onsubmit = function (e) {
  console.log('submitted!');  
};

submit(form);
// "submitted!"
```

## API

### submit(form)

  Submit a `form` programmatically, triggering its submit handlers.

## License

  MIT
