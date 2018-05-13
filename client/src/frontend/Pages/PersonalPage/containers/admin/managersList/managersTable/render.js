import React from 'react';
import ManagerRow from '../managerRow';

export default function(props, state) {
  function showManagers() {
    let managers = props.managers;

    return managers.map((manager) => {
      return (
        <ManagerRow manager={manager} key={manager.id} />
      );
    });
  }

  return (
    <table className="table table-hover students__table">
      <thead>
        <tr>
          <td></td>
          <td>Фамилия</td>
          <td>Имя</td>
          <td>Отчество</td>
          <td>Email</td>
          <td>Отделение</td>
        </tr>
      </thead>
      <tbody>
        { showManagers() }
      </tbody>
    </table>
  );
}
