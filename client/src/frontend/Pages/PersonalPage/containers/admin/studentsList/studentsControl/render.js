import React from 'react';
import StudentsFilters from '../studentsFilters';
import AddStudentForm from '../addStudentForm';
import EditStudentForm from '../editStudentForm';
import SearchBar from '../searchBar';
import * as fetch from '../../../../../../classes/fetch';

export default function(props, state) {
  return (
    <div className="students">
      <div className="students__tab" id="js_tabs">
        <div className="students__tab_links">
          <span data-tab="add" onClick={ this.changeTab } className="students__tab_links--item students__tab_links--item-active">Добавление</span>
          <span data-tab="edit" onClick={ this.changeTab } className="students__tab_links--item">Изменение</span>
          <span data-tab="filter" onClick={ this.changeTab } className="students__tab_links--item">Фильтрация</span>
          <span data-tab="search" onClick={ this.changeTab } className="students__tab_links--item">Поиск</span>
        </div>
        <div className="students__tab_main">
          <div data-tab="add" className="students__tab_main--item"><AddStudentForm /></div>
          <div data-tab="edit" className="students__tab_main--item hidden"><EditStudentForm /></div>
          <div data-tab="filter" className="students__tab_main--item hidden"><StudentsFilters /></div>
          <div data-tab="search" className="students__tab_main--item hidden"><SearchBar /></div>
        </div>
      </div>
      <div className="students__buttons buttons_group">
        <button
          onClick={ this.updateStudent }
          ref={(button) => this.updateButton = button }
          className='btn btn-secondary btn-sm'
          >
          Изменить информацию студента
        </button>
        <button
          onClick={ this.deleteStudent }
          ref={(button) => this.deleteButton = button }
          className='btn btn-secondary btn-sm'
          >
          Удалить студента
        </button>
        <button
          onClick={ this.transferStudents }
          ref={(button) => this.transferButton = button }
          className='btn btn-secondary btn-sm'
          >
          Перевод всех студентов на следующий курс
        </button>
      </div>

    </div>
  );
}
