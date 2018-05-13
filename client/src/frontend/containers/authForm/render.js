import React from 'react';

export default function(props, state) {
  let className = 'modal-window hidden';

  if(this.props.isEnabled) {
    className = 'modal-window';
  }

  return (
    <div className={ className }>
      <form className="form form_auth" ref={(form) => { this.authForm = form }}>
        <input className="form-control form-control-sm" type="text" name="login" placeholder="Login" ref={(input) => { this.loginInput = input }}/>
        <input className="form-control form-control-sm" type="password" name="pass" placeholder="Password" ref={(input) => { this.passInput = input }}/>
        <input type="submit" onClick={this.handleClick} className="btn btn-outline-dark btn-sm"/>
      </form>
    </div>
  );
}
