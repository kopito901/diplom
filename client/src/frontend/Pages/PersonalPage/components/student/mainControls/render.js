import React from 'react';
import MainEditAvatar from '../../../containers/manager/main/mainEditAvatar';
import MainEditPassword from '../../../containers/manager/main/mainEditPassword';


export default function(props, state) {
  return (
    <div className="tabs" id="js_tabs">
      <div className="tabs_links">
        <span data-tab="uploadAvatar" onClick={ this.changeTab } className="tabs_links--item tabs_links--item-active">Изменение аватара</span>
        <span data-tab="editPass" onClick={ this.changeTab } className="tabs_links--item">Изменение пароля</span>
      </div>
      <div className="tabs_main">
        <div data-tab="uploadAvatar" className="tabs_main--item"><MainEditAvatar /></div>
        <div data-tab="editPass" className="tabs_main--item hidden"><MainEditPassword /></div>
      </div>
    </div>
  );
}
