import React from 'react';

export default function(props, state) {
  return (
    <form className="form form_auth" ref={(form) => { this.authForm = form }}>
      <input className="form__input" type="text" name="login" placeholder="Login" ref={(input) => { this.loginInput = input }}/>
      <input className="form__input" type="text" name="pass" placeholder="Password" ref={(input) => { this.passInput = input }}/>
      <input type="submit" onClick={this.handleClick}/>
    </form>
  );
}
