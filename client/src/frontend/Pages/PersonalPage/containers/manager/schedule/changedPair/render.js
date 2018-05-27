import React from 'react';

export default function(props, state) {
  let pair = props.pair;
  return (
    <tr>
      <td>
        <button onClick={ this.deleteChange }
          ref={(button) => this.btn = button }
          className='btn btn-secondary btn-sm'
          >Удалить</button>
      </td>
      <td>{ pair.Day.name }</td>
      <td>{ pair.pairNumber }</td>
      <td>{ pair.Discipline.name }</td>
    </tr>
  );
}
