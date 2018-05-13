import React from 'react';
import { Link } from 'react-router-dom';
import AuthForm from '../authForm';

export default function(props, state) {
  function renderAuth(e) {
    let currentUser = props.users.currentUser || null,
      isAlreadyAuth = (currentUser && currentUser.name)? true : false;

    if(isAlreadyAuth) {
      return(
        <div className="header__user-info">
          <Link to={`/lk/${currentUser.id}`} className="header__user-info_user">
            <img src={ currentUser.photo_url } alt={ currentUser.name }/>
            <span className="header__user-info_user--name">{ currentUser.name } { currentUser.surname }</span>
          </Link>
          <a href="" className="header__user-info_exit" onClick={e.exit}>Выйти</a>
        </div>
      );
    } else {
      return(
        <div className="header__user-info">
          <a href="" className="header__auth" onClick={e.changeState}>Авторизация</a>
        </div>
      );
    }
  }

  return (
    <header className="header">
      <Link to="/" className="header__logo"></Link>
      <h1>Московский Приборостроительный Техникум</h1>
      { renderAuth(this) }
      <AuthForm isEnabled={ this.state.isEnabledForm } changeState={ this.changeState }/>
    </header>
  );
}
