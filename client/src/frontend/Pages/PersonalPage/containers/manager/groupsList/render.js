import React from 'react';
import Sort from '../../../../../classes/sort';
import GroupsControls from './groupsControls';
import GroupBlock from './groupBlock';

export default function(props, state) {
  function buildGroups() {
    let groups = props.managerData.groups.list;

    switch (props.managerData.groups.filter) {
      case 'name+':
        groups.sort(Sort.nameAscendingSort);
        break;
      case 'name-':
        groups.sort(Sort.nameDescendingSort);
        break;
      case 'count+':
        groups.sort(Sort.studentCountAscendingSort);
        break;
      case 'count-':
        groups.sort(Sort.studentCountDescendingSort);
        break;
    }

    return groups.map((group) => {
      if(!!props.managerData.groups.search.string) {
        switch (props.managerData.groups.search.type) {
          case 'number':
            if(group.number && group.number.toString().indexOf(props.managerData.groups.search.string) + 1) {
              return (
                <GroupBlock group={group} key={group.id} />
              );
            }
            break;
          case 'usersCount':
            if(group.usersCount.toString() !== '' && group.usersCount.toString().indexOf(props.managerData.groups.search.string) + 1) {
              return (
                <GroupBlock group={group} key={group.id} />
              );
            }
            break;
        }
      } else {
        return (
          <GroupBlock group={group} key={group.id} />
        );
      }
    });
  }

  return (
    <div>
      <GroupsControls />
      { buildGroups() }
    </div>
  );
}
