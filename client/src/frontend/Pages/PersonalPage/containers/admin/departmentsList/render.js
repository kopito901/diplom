import React from 'react';
import DepartmentsTable from './departmentsTable';
import DepartmentsControl from './departmentsControl';


export default function(props, state) {
  return (
    <div>
      <DepartmentsTable history={ props.history } />
    </div>
  );
}
