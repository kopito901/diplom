import React from 'react';
import GroupsFilters from '../groupsFilters';
import SearchBar from '../searchBar';

export default function(props, state) {
  return (
    <div className="tabs" id="js_tabs">
      <div className="tabs_links">
        <span data-tab="filter" onClick={ this.changeTab } className="tabs_links--item tabs_links--item-active">Фильтрация</span>
        <span data-tab="search" onClick={ this.changeTab } className="tabs_links--item">Поиск</span>
      </div>
      <div className="tabs_main">
        <div data-tab="filter" className="tabs_main--item"><GroupsFilters /></div>
        <div data-tab="search" className="tabs_main--item hidden"><SearchBar /></div>
      </div>
    </div>
  );
}
