import React from 'react';

export default function(props, state) {
  let checkBoxId = `checkBox[${props.department.id}]`,
    managerName = (props.department.manager)? `${props.department.manager.name} ${props.department.manager.surname} ${props.department.manager.patronymic}` : 'Не определен';

  return (
    <tr className="students__table_row" onClick={ this.handleClick } >
      <td>{ props.department.number }</td>
      <td>{ props.department.name }</td>
      <td>{ managerName }</td>
      <td>{ props.department.groupCount }</td>
    </tr>
  );
}
