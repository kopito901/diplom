import React from 'react';

export default function(props, state) {
  return (
    <form className="form form_add-group" ref={(form) => this.addGroupForm = form }>
      <h2 className="admin__title">Добавление группы</h2>

      <div className="form-group">
        <label htmlFor="groupName">Номер группы:</label>
        <input type="text" className="form-control form-control-sm" placeholder="Введите номер группы" name="groupName" id="groupName" ref={(input) => this.name = input }/>
      </div>
      <button onClick={ this.addGroup }
        ref={(button) => this.addButton = button }
        className='btn btn-secondary btn-sm'
        >Добавить группу</button>
    </form>
  );
}
