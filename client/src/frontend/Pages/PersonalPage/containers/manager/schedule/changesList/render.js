import React from 'react';
import ChangedPair from '../changedPair';

export default function(props, state) {
  function showChanges() {
    let changedPairs = props.pairs;

    return changedPairs.map((pair) => {
      return (
        <ChangedPair pair={pair} key={pair.id} match={props.match}/>
      );
    });
  }


  return (
    <table className="table table-hover schedule__table">
      <thead>
        <tr>
          <td></td>
          <td>День недели</td>
          <td>Номер пары</td>
          <td>Предмет</td>
        </tr>
      </thead>
      <tbody>
        { showChanges() }
      </tbody>
    </table>
  );
}
