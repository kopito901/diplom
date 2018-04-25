import React from 'react';
import AuthForm from '../authForm';
import { connect } from 'react-redux';

export default function(props, state) {
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
          <span className="header__auth" onClick={this.handleClick}>Авторизация</span>
        </div>
        <AuthForm ref={(form) => { this.authForm = form; }} />
      </div>
    </header>
  );
}
