import React from 'react';

export default function(props, state) {
  return (
    <div>
      <form className="form form_edit-email form-sm" ref={(form) => this.editEmailForm = form }>
        <h2 className="admin__title">Изменение электронной почты канцелярии</h2>

        <div className="form-group">
          <label htmlFor="chanceryEmail">Email канцелярии:</label>
          <input type="text" className="form-control form-control-sm" placeholder="email" name="chanceryEmail" id="chanceryEmail" ref={(input) => this.email = input }/>
        </div>
        <button onClick={ this.editEmail }
          ref={(button) => this.editButton = button }
          className='btn btn-secondary btn-sm'
          >Изменить email</button>
      </form>
      <h3>Текущий email канцелярии: { props.chancery.email }</h3>
    </div>
  );
}
