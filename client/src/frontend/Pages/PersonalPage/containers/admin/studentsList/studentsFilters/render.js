import React from 'react';

export default function(props, state) {
  return (
    <div className="">
      <h2 className="admin__title">Фильтрация</h2>
      <div className="buttons_group">
        <button onClick={ this.filter } data-type="course" ref={(button) => this.courseFilter = button } className='btn btn-secondary btn-sm'>По курсу</button>
        <button onClick={ this.filter } data-type="department" ref={(button) => this.departmentFilter = button } className='btn btn-secondary btn-sm'>По отделению</button>
        <button onClick={ this.filter } data-type="group" ref={(button) => this.groupFilter = button } className='btn btn-secondary btn-sm'>По группе</button>
      </div>
    </div>
  );
}
