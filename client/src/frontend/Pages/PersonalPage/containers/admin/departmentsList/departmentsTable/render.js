import React from 'react';
import DepartmentRow from '../departmentRow';

export default function(props, state) {
  function showDepartments() {
    let departments = props.departmentsCount;

    return departments.map((department) => {
      return (
        <DepartmentRow department={ department } history={ props.history } key={ department.id } />
      );
    });
  }

  return (
    <table className="table table-hover students__table">
      <thead>
        <tr>
          <td>Номер отделения</td>
          <td>Название отделения</td>
          <td>Зав. отделения</td>
          <td>Количество групп</td>
        </tr>
      </thead>
      <tbody>
        { showDepartments() }
      </tbody>
    </table>
  );
}
