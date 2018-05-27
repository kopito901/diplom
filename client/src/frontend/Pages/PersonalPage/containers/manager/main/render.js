import React from 'react';
import MainControls from '../../../components/manager/mainControls';

export default function(props, state) {
  return (
    <div className="personal-page">
      <h1>Личный кабинет</h1>
      <div className="container-fluid personal-page__container">
        <div className="row">
          <div className="col-md-2">
            <img src={ props.currentUser.photo_url } alt='photo' className="personal-page__avatar" />
          </div>
          <div className="col">
            <h2 className="personal-page__name">{ props.currentUser.name } { props.currentUser.surname } { props.currentUser.patronymic }</h2>
            <p className="personal-page__email">email: { props.currentUser.email }</p>
            <p className="personal-page__department">Отделение: { props.currentUser.Group.Department.number } { props.currentUser.Group.Department.name }</p>
          </div>
        </div>
        <div className="row">
          <MainControls />
        </div>
      </div>
    </div>
  );
}
