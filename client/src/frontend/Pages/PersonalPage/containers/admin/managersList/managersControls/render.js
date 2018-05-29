import React from 'react';
import AddManagerForm from '../addManagerForm';

export default function(props, state) {
  return (
    <div className="students">
      <div className="tabs" id="js_tabs">
        <div className="tabs_main">
          <div className="tabs_main--item"><AddManagerForm /></div>
        </div>
      </div>
      <div className="students__buttons buttons_group">
        <button
          onClick={ this.deleteManager }
          ref={(button) => this.deleteButton = button }
          className='btn btn-secondary btn-sm'
          >
          Удалить заведующего
        </button>
      </div>
    </div>
  );
}
