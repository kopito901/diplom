const Validate = {
  _validateForm: function(form) {
    let inputs = form.querySelectorAll('.form-control'),
      selects = form.querySelectorAll('.custom-select'),
      files = form.querySelectorAll('.custom-file-input');

    for (var input in inputs) {
      if(inputs.hasOwnProperty(input)) {
        inputs[input].classList.remove('is-invalid');

        if(inputs[input].name.indexOf('Email') == -1) {
          this._validateInput(inputs[input]);
        } else {
          this._validateEmail(inputs[input]);
        }
      }
    }

    for (var select in selects) {
      if(selects.hasOwnProperty(select)) {
        selects[select].classList.remove('is-invalid');
        this._validateSelect(selects[select]);
      }
    }

    for (var file in files) {
      if(files.hasOwnProperty(file)) {
        files[file].classList.remove('is-invalid');
        this._validateFile(files[file]);
      }
    }

    if(!form.querySelectorAll('.is-invalid').length) {
      return true;
    } else {
      return false;
    }
  },

  _validateInput: function(input) {
    if(!input.value) {
      input.classList.add('is-invalid');
      return false;
    }
  },

  _validateSelect: function(select) {
    if(!select.value) {
      select.classList.add('is-invalid');
      return false;
    }
  },

  _validateFile: function(file) {
    if(file.files[0]) {
      let format = file.files[0].name.split('.')[file.files[0].name.split('.').length - 1];

      if(format === 'jpg' || format === 'jpeg' || format === 'png') {
        file.classList.remove('is-invalid');
      } else {
        file.classList.add('is-invalid');
        return false;
      }
    } else {
      file.classList.add('is-invalid');
      return false;
    }
  },

  _validateEmail: function(input) {
    let pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

    if(!input.value || !pattern.test(input.value)) {
      input.classList.add('is-invalid');
      return false;
    }
  }
}

module.exports = Validate;
