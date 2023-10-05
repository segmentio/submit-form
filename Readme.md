
# submit-form

> **Note**  
> Segment has paused maintenance on this project, but may return it to an active status in the future. Issues and pull requests from external contributors are not being considered, although internal contributions may appear from time to time. The project remains available under its open source license for anyone to use.

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
