import React from 'react';

export default function(props, state) {
  let student = this.props.student,
    checkBoxId = `checkBox[${student.id}]`;

  if(student.GroupId) {
    return (
      <tr className="students__table_row" onClick={ this.pickUser }>
        <td>
          <input
            id={ checkBoxId }
            type="checkbox"
            ref={(input) => { this.checkBox = input }}
          />
        </td>
        <td>{ student.surname || '' }</td>
        <td>{ student.name || ''}</td>
        <td>{ student.patronymic || ''}</td>
        <td>{ student.email || ''}</td>
        <td>{ student.CourseId || ''}</td>
        <td>{ student.Group.Department.number || ''}</td>
        <td>{ student.Group.number || ''}</td>
      </tr>
    );
  } else {
    return (
      <tr className="students__table_row" onClick={ this.pickUser }>
        <td>
          <input
            id={ checkBoxId }
            type="checkbox"
            ref={(input) => { this.checkBox = input }}
          />
        </td>
        <td>{ student.surname || '' }</td>
        <td>{ student.name || ''}</td>
        <td>{ student.patronymic || ''}</td>
        <td>{ student.email || ''}</td>
        <td>{ student.CourseId || ''}</td>
        <td></td>
        <td></td>
      </tr>
    );
  }

}
