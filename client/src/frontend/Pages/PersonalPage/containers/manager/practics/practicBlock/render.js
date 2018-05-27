import React from 'react';
import { Link } from 'react-router-dom';

export default function(props, state) {
  function getImage() {
    if(props.practic.photo_url) {
      return (
        <div className="col-md-1">
          <img src={ props.practic.photo_url } alt="logo" className="student-block__avatar"/>
        </div>
      );
    } else {
      return (
        <div></div>
      );
    }
  }

  return (
    <div className="container-fluid student-block">
      <div className="row">
        { getImage() }
        <div className="col">
          <h2 className="student-block__name">{ props.practic.title }</h2>
          <p className="student-block__group">Адрес: { props.practic.adress }</p>
          <p className="student-block__group">Номер телефона: { props.practic.phone }</p>
          <p className="student-block__email">Email: { props.practic.email }</p>
          <a href={props.practic.site} className="student-block__course">Сайт: { props.practic.site }</a>
        </div>
        <div className="student-block__links">
          <button onClick={ this.deletePractic }
            ref={(button) => this.submit = button }
            className='btn btn-secondary btn-sm'
            >Удалить базу практики</button>
        </div>
      </div>
    </div>
  );
}
