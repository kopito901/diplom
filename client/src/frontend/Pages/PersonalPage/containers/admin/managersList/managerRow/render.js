import React from 'react';

export default function(props, state) {
  let manager = this.props.manager,
    checkBoxId = `checkBox[${manager.id}]`;

  if(manager.GroupId) {
    return (
      <tr className="students__table_row" onClick={ this.pickManager }>
        <td>
          <input
            id={ checkBoxId }
            type="checkbox"
            ref={(input) => { this.checkBox = input }}
          />
        </td>
        <td>{ manager.surname || '' }</td>
        <td>{ manager.name || ''}</td>
        <td>{ manager.patronymic || ''}</td>
        <td>{ manager.email || ''}</td>
        <td>{ manager.Group.Department.number || ''}</td>
      </tr>
    );
  } else {
    return (
      <tr className="students__table_row" onClick={ this.pickManager }>
        <td>
          <input
            id={ checkBoxId }
            type="checkbox"
            ref={(input) => { this.checkBox = input }}
          />
        </td>
        <td>{ manager.surname || '' }</td>
        <td>{ manager.name || ''}</td>
        <td>{ manager.patronymic || ''}</td>
        <td>{ manager.email || ''}</td>
        <td></td>
      </tr>
    );
  }

}
