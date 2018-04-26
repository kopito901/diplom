import React from 'react';
import { Link } from 'react-router-dom';
import AuthForm from '../authForm';

export default function(props, state) {
  let currentUser = this.props.users.currentUser,
    isAlreadyAuth = (currentUser.name)? true : false,
    helloPlace;

  if(isAlreadyAuth) {
    helloPlace = <Link to={`/lk/${currentUser.id}`} className="header__auth">Личный кабинет</Link>;
  } else {
    helloPlace = <span className="header__auth" onClick={this.changeState}>Авторизация</span>;
  }

  return (
    <header className="header">
      <div className="header__wrapper">
        <div className="header__logo-wrapper">
          <div className="header__logo_img">
            <a src="" alt=""></a>
          </div>
          <div className="header__text">
            <h1 className="header__text_title">Московский<br/>приборостроительный<br/>техникум</h1>
            <h2 className="header__text_name">ФГБОУ ВО РЭУ ИМ. Г.В. ПЛЕХАНОВА</h2>
          </div>
        </div>
        <div className="header__contacts">
          <span>г. Москва, Нежинская улица, 7; г. Москва, Нахимовский проспект, 21</span>
          <span>Приёмная комиссия: 8 (495) 792-83-02; 8 (499) 317-04-09</span>
          <span>Канцелярия: 8 (495) 442-65-77</span>
          {helloPlace}
        </div>
        <AuthForm isEnabled={this.state.isEnabledForm} changeState={this.changeState} ref={(form) => { this.authForm = form; }} />
      </div>
    </header>
  );
}
