import React from 'react';
import ManagersControls from './managersControls';
import ManagersTable from './managersTable';

export default function(props, state) {
  return (
    <div>
      <ManagersControls />
      <ManagersTable />
    </div>
  );
}
