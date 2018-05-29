import React from 'react';
import AddGroupForm from '../addGroupForm';

export default function(props, state) {
  return (
    <div className="students">
      <div className="tabs" id="js_tabs">
        <div className="tabs_main">
          <div data-tab="add" className="tabs_main--item"><AddGroupForm department={this.props.match.params.number} /></div>
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
