import React from 'react';
import StudentsTable from './studentsTable';
import StudentsControl from './studentsControl';

export default function(props, state) {
  return (
    <div className="">
      <StudentsControl />
      <StudentsTable />
    </div>
  );
}
