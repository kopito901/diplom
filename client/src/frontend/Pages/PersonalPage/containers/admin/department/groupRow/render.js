import React from 'react';

export default function(props, state) {
  let checkBoxId = `checkBox[${props.group.id}]`;

  return (
    <tr className="students__table_row" onClick={this.pickGroup} >
      <td>
        <input
          id={ checkBoxId }
          type="checkbox"
          ref={(input) => { this.checkBox = input }}
        />
      </td>
      <td>{ props.group.number }</td>
    </tr>
  );
}
