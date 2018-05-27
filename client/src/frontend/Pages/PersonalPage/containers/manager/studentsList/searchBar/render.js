import React from 'react';

export default function(props, state) {
  return (
    <form>
      <h2 className="admin__title">Поиск</h2>
      <div className="input-group input-group-sm form-group form-group_search">
        <select className="custom-select custom-select-sm form-select" onChange={ this.setSearchFilter } ref={(select) => this.searchType = select }>
          <option value="name" default>Имя</option>
          <option value="surname" default>Фамилия</option>
          <option value="patronymic" default>Отчество</option>
          <option value="email" default>Email</option>
          <option value="course" default>Курс</option>
          <option value="group" default>Группа</option>
        </select>
        <div className="input-group-append">
          <label className="input-group-text" htmlFor="studentCourse">Список</label>
        </div>
      </div>
      <div className="input-group">
        <input
          type="text"
          onChange={ this.setSearchFilter }
          className="form-control form-control-sm"
          placeholder="Введите поисковую строку"
          ref={(input) => this.searchInput = input }
        />
        <div className="input-group-append">
          <button onClick={ this.setSearchFilter } ref={(button) => this.searchBtn } className='btn btn-secondary btn-sm'>Найти</button>
        </div>
      </div>
    </form>
  );
}
