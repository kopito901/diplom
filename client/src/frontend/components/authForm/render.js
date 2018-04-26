import React from 'react';

export default function(props, state) {
  let className = 'form form_auth form_hidden';

  if(this.props.isEnabled) {
    className = 'form form_auth';
  }

  return (
    <form className={className} ref={(form) => { this.authForm = form }}>
      <input className="form__input" type="text" name="login" placeholder="Login" ref={(input) => { this.loginInput = input }}/>
      <input className="form__input" type="text" name="pass" placeholder="Password" ref={(input) => { this.passInput = input }}/>
      <input type="submit" onClick={this.handleClick}/>
    </form>
  );
}
