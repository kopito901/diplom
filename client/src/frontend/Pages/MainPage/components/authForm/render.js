import React from 'react';

export default function(props, state) {
  return (
    <form className="form form_auth" ref="form">
      <input className="form__input" type="text" name="login" placeholder="Login"/>
      <input className="form__input" type="text" name="pass" placeholder="Password"/>
      <input type="submit" onClick={this.handleClick}/>
    </form>
  );
}
