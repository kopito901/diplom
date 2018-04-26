import Base from './base';
import Render from './render';

import { connect } from 'react-redux';

class AuthForm extends Base {
	render() {
		return Render.call(this, this.props, this.state);
	}
}

function mapStateToProps(state) {
	return {
		users : state.users
	}
};

export default connect(mapStateToProps)(AuthForm);
