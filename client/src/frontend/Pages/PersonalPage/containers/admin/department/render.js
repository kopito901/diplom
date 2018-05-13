import React from 'react';
import GroupsTable from './groupsTable';
import GroupsControl from './groupsControl';

export default function(props, state) {

  return (
    <div>
      <GroupsControl match={ props.match } />
      <GroupsTable />
    </div>
  );
}
