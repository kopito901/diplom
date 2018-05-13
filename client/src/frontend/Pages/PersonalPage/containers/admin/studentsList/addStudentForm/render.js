import React from 'react';
import * as fetch from '../../../../../../classes/fetch';

export default function(props, state) {
  function getDepartments() {
    let departments = props.adminData.departments;

    return departments.map((department) => {
      return(
        <option value={ department.id } key={ department.id }>{ department.name }</option>
      );
    });
  }

  function getGroups() {
    let groups = props.adminData.groups;

    return groups.map((group) => {
      return(
        <option value={ group.id } key={ group.id }>{ group.number }</option>
      );
    });
  }

  let currentPickedUser = this.props.pickedUsers;

  return (
    <form className="form form_add-student" ref={(form) => this.addUserForm = form }>
      <h2 className="admin__title">Добавление студента</h2>

      <div className="form-group">
        <label htmlFor="studentName">Имя студента:</label>
        <input type="text" className="form-control form-control-sm" placeholder="Введите имя" name="studentName" id="studentName" ref={(input) => this.name = input }/>
      </div>
      <div className="form-group">
        <label htmlFor="studentSurname">Фамилия студента:</label>
        <input type="text" className="form-control form-control-sm" placeholder="Введите фамилию" name="studentSurname" id="studentSurname" ref={(input) => this.surname = input }/>
      </div>
      <div className="form-group">
        <label htmlFor="studentPatronymic">Отчество студента:</label>
        <input type="text" className="form-control form-control-sm" placeholder="Введите отчество" name="studentPatronymic" id="studentPatronymic" ref={(input) => this.patronymic = input }/>
      </div>
      <div className="form-group">
        <label htmlFor="studentEmail">Email студента:</label>
        <input type="text" className="form-control form-control-sm" placeholder="email" name="studentEmail" id="studentEmail" ref={(input) => this.email = input }/>
      </div>
      <div className="input-group form-group">
        <select className="custom-select form-select" name="studentCourse" id="studentCourse" ref={(input) => this.course = input }>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
        <div className="input-group-append">
          <label className="input-group-text" htmlFor="studentCourse">Список</label>
        </div>
      </div>
      <div className="input-group form-group">
        <select className="custom-select form-select" name="studentDepartment" id="studentDepartment" onChange={ this.selectDepartment } ref={(input) => this.department = input }>
          { getDepartments() }
        </select>
        <div className="input-group-append">
          <label className="input-group-text" htmlFor="studentDepartment">Список</label>
        </div>
      </div>
      <div className="input-group form-group">
        <select className="custom-select form-select" name="studentGroup" id="studentGroup" ref={(select) => this.group = select }>
          { getGroups() }
        </select>
        <div className="input-group-append">
          <label className="input-group-text" htmlFor="studentGroup">Список</label>
        </div>
      </div>
      <button onClick={ this.addStudent }
        ref={(button) => this.addButton = button }
        className='btn btn-secondary btn-sm'
        >Добавить студента</button>
    </form>
  );
}
