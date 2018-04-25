const Validate = {
  _validateForm: function(form) {
    let inputs = form.querySelectorAll('.form__input');

    for (var input in inputs) {
      if(inputs.hasOwnProperty(input)) {
        inputs[input].classList.remove('form__input_error');
        this._validateInput(inputs[input]);
      }
    }

    if(!form.querySelectorAll('.form__input_error').length) {
      return true;
    } else {
      return false;
    }
  },

  _validateInput: function(input) {
    if(!input.value) {
      input.classList.add('form__input_error');
      return false;
    }
  }
}

module.exports = Validate;
