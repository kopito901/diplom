import React from 'react';

export default function(props, state) {
  return (
    <div className="">
      <h2 className="admin__title">Фильтрация</h2>
      <div className="buttons_group">
        <button onClick={ this.filter } data-type="name" ref={(button) => this.nameFilter = button } className='btn btn-secondary btn-sm'>По названию</button>
        <button onClick={ this.filter } data-type="count" ref={(button) => this.counttFilter = button } className='btn btn-secondary btn-sm'>По количеству студентов</button>
      </div>
    </div>
  );
}
