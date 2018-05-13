import React from 'react';

export default function(props, state) {
  function getDepartments() {
    let departments = props.adminData.departments;

    return departments.map((department) => {
      return (
        <option value={ department.id } key={ department.id }>{ department.number }</option>
      );
    });
  }

  return (
    <form className="form form_add-manager" ref={(form) => this.addManagerForm = form }>
      <h2 className="admin__title">Добавление заведующего</h2>

      <div className="form-group">
        <label htmlFor="studentName">Имя заведующего:</label>
        <input type="text" className="form-control form-control-sm" placeholder="Введите имя" name="studentName" id="studentName" ref={(input) => this.name = input }/>
      </div>
      <div className="form-group">
        <label htmlFor="studentSurname">Фамилия заведующего:</label>
        <input type="text" className="form-control form-control-sm" placeholder="Введите фамилию" name="studentSurname" id="studentSurname" ref={(input) => this.surname = input }/>
      </div>
      <div className="form-group">
        <label htmlFor="studentPatronymic">Отчество заведующего:</label>
        <input type="text" className="form-control form-control-sm" placeholder="Введите отчество" name="studentPatronymic" id="studentPatronymic" ref={(input) => this.patronymic = input }/>
      </div>
      <div className="form-group">
        <label htmlFor="studentEmail">Email заведующего:</label>
        <input type="text" className="form-control form-control-sm" placeholder="email" name="studentEmail" id="studentEmail" ref={(input) => this.email = input }/>
      </div>
      <div className="input-group form-group">
        <select className="custom-select form-select" name="studentDepartment" id="studentDepartment" onChange={ this.selectDepartment } ref={(input) => this.department = input }>
          { getDepartments() }
        </select>
        <div className="input-group-append">
          <label className="input-group-text" htmlFor="studentDepartment">Список</label>
        </div>
      </div>
      <button onClick={ this.addManager }
        ref={(button) => this.addButton = button }
        className='btn btn-secondary btn-sm'
        >Добавить студента</button>
    </form>
  );
}
