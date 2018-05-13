import React from 'react';
import GroupRow from '../groupRow';

export default function(props, state) {
  function showGroups() {
    let groups = props.departmentsGroup;

    return groups.map((group) => {
      return <GroupRow group={ group } key={ group.id } />
    });
  }

  return (
    <table className="table table-hover students__table">
      <thead>
        <tr>
          <td width="40"></td>
          <td>Номер группы</td>
        </tr>
      </thead>
      <tbody>
        { showGroups() }
      </tbody>
    </table>
  );
}
