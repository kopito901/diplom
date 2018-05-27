import React from 'react';

export default function(props, state) {
  return (
    <form className="form form_edit-pass" ref={(form) => this.editPassForm = form }>
      <h2 className="admin__title">Изменение пароля</h2>

      <div className="form-group">
        <label htmlFor="oldPass">Старый пароль:</label>
        <input type="text" className="form-control form-control-sm" placeholder="Введите старый пароль" name="oldPass" id="oldPass" ref={(input) => this.oldPass = input }/>
      </div>
      <div className="form-group">
        <label htmlFor="newPass">Новый пароль:</label>
        <input type="text" className="form-control form-control-sm" placeholder="Введите новый пароль" name="newPass" id="newPass" ref={(input) => this.newPass = input }/>
      </div>
      <div className="form-group">
        <label htmlFor="repeatOldPass">Повторите новый пароль:</label>
        <input type="text" className="form-control form-control-sm" placeholder="Введите новый пароль" name="repeatOldPass" id="repeatOldPass" ref={(input) => this.repeatNewPass = input }/>
      </div>
      <button onClick={ this.changePassword }
        ref={(button) => this.changePassword = button }
        className='btn btn-secondary btn-sm'
        >Изменить пароль</button>
    </form>
  );
}
