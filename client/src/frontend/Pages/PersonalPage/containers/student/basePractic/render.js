import React from 'react';

export default function(props, state) {
  function getImage() {
    if(props.practic.photo_url) {
      return (
        <img src={ props.practic.photo_url } alt='photo' className="personal-page__avatar" />
      );
    } else {
      return (
        <div></div>
      );
    }
  }
  
  return (
    <div className="personal-page">
      <h1>База практики</h1>
      <div className="container-fluid personal-page__container">
        <div className="row">
          <div className="col-md-2">
            { getImage() }
          </div>
          <div className="col">
            <h2 className="personal-page__name">{ props.practic.title }</h2>
            <p className="personal-page__group">Адрес: { props.practic.adress }</p>
            <p className="personal-page__group">Номер телефона: { props.practic.phone }</p>
            <p className="personal-page__email">Email: { props.practic.email }</p>
            <a href={props.practic.site} className="personal-page__course">Сайт: { props.practic.site }</a>
          </div>
        </div>
      </div>
    </div>
  );
}
