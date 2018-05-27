import React from 'react';
import PracticsControls from './practicsControls';
import PracticBlock from './practicBlock';

export default function(props, state) {
  function buildPractics() {
    let practics = props.practics.list;

    return practics.map((practic) => {
      return (
        <PracticBlock practic={practic} key={practic.id} />
      );
    });
  }

  return (
    <div>
      <h2 className="title">Базы практик</h2>
      <PracticsControls />
      { buildPractics() }
    </div>
  );
}
