import Base from './base';
import Render from './render';

import { connect } from 'react-redux';

class AuthForm extends Base {
	render() {
		return Render.call(this, this.props, this.state);
	}
}

export default connect(
	(state, ownProps) => ({
		users : state.user
	}),
	dispatch => ({
		onTryLogin : (login, password) => {
			const user = {
				login: login,
				password: password
			};
			dispatch({ type : 'TRY_LOGIN', payload : user });
		}
	})
)(AuthForm);
