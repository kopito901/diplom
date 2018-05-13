import React from 'react';
import * as fetch from '../../../../../../classes/fetch';
import {
  getGroupsList
} from '../../../../../../actions/adminData';

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
    let groups = props.adminData.editGroups;

    return groups.map((group) => {
      return(
        <option value={ group.id } key={ group.id }>{ group.number }</option>
      );
    });
  }

  let currentPickedUser = this.props.adminData.pickedEditUser;

  if(currentPickedUser.id) {
    return (
      <form className="form form_add-student" data-user={ currentPickedUser.id } ref={(form) => this.editUserForm = form }>
        <h2 className="admin__title">Изменение информации студента</h2>

        <div className="form-group">
          <label htmlFor="studentName">Имя студента:</label>
          <input type="text" className="form-control form-control-sm" placeholder="Введите имя" name="studentName" id="studentName" data-type='name' ref={(input) => this.name = input } value={ currentPickedUser.name } onChange={() => {}} />
        </div>
        <div className="form-group">
          <label htmlFor="studentSurname">Фамилия студента:</label>
          <input type="text" className="form-control form-control-sm" placeholder="Введите фамилию" name="studentSurname" id="studentSurname" data-type='surname' ref={(input) => this.surname = input } value={ currentPickedUser.surname } onChange={() => {}} />
        </div>
        <div className="form-group">
          <label htmlFor="studentPatronymic">Отчество студента:</label>
          <input type="text" className="form-control form-control-sm" placeholder="Введите отчество" name="studentPatronymic" id="studentPatronymic" data-type='patronymic' ref={(input) => this.patronymic = input } value={ currentPickedUser.patronymic } onChange={() => {}} />
        </div>
        <div className="form-group">
          <label htmlFor="studentEmail">Email студента:</label>
          <input type="text" className="form-control form-control-sm" placeholder="email" name="studentEmail" id="studentEmail" data-type='email' ref={(input) => this.email = input } value={ currentPickedUser.email } onChange={() => {}} />
        </div>
        <div className="input-group form-group">
          <select className="custom-select form-select" name="studentCourse" id="studentCourse" data-type='CourseId' ref={(input) => this.course = input } value={ currentPickedUser.CourseId } onChange={() => {}} >
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
          <select className="custom-select form-select" name="studentDepartment" id="studentDepartment" onChange={ this.selectDepartment } data-type='' ref={(input) => this.department = input } value={ currentPickedUser.Group.DepartmentId }>
            { getDepartments() }
          </select>
          <div className="input-group-append">
            <label className="input-group-text" htmlFor="studentDepartment">Список</label>
          </div>
        </div>
        <div className="input-group form-group">
          <select className="custom-select form-select" name="studentGroup" id="studentGroup" data-type='' ref={(select) => this.group = select } onChange={() => {}} value={ currentPickedUser.GroupId } >
            { getGroups() }
          </select>
          <div className="input-group-append">
            <label className="input-group-text" htmlFor="studentGroup">Список</label>
          </div>
        </div>
        <button onClick={ this.editStudent }
          ref={(button) => this.addButton = button }
          className='btn btn-secondary btn-sm'
          >Добавить студента</button>
      </form>
    );
  } else {
    return(
      <div>
        <h2 className="admin__title">Изменение информации студента</h2>
        <h3>Выберите студента</h3>
      </div>
    );
  }
}
