import React from 'react';
import DepartmentsTable from './departmentsTable';


export default function(props, state) {
  return (
    <div>
      <DepartmentsTable history={ props.history } />
    </div>
  );
}
