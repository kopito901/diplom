import React from 'react';
import AddGroupForm from '../addGroupForm';
import EditGroupForm from '../editGroupForm';

export default function(props, state) {
  return (
    <div className="students">
      <div className="tabs" id="js_tabs">
        <div className="tabs_links">
          <span data-tab="add" onClick={ this.changeTab } className="tabs_links--item tabs_links--item-active">Добавление</span>
          <span data-tab="edit" onClick={ this.changeTab } className="tabs_links--item">Изменение</span>
        </div>
        <div className="tabs_main">
          <div data-tab="add" className="tabs_main--item"><AddGroupForm department={this.props.match.params.number} /></div>
          <div data-tab="edit" className="tabs_main--item hidden"><EditGroupForm department={this.props.match.params.number} /></div>
        </div>
      </div>
      <div className="students__buttons buttons_group">
        <button
          onClick={ this.deleteStudent }
          ref={(button) => this.deleteButton = button }
          className='btn btn-secondary btn-sm'
          >
          Удалить группу
        </button>
      </div>
    </div>
  );
}
