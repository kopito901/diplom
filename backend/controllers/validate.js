const Validate = {
  _validateData: function(data) {
    for (var value in data) {
      if(!this._validateValue(value)) {
        return false;
      }
    }

    return true;
  },

  _validateValue: function(value) {
    if(!value) {
      return false;
    } else {
      return true;
    }
  }
}

module.exports = Validate;
