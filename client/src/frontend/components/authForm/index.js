import Base from './base';
import Render from './render';

export default class AuthForm extends Base {
	render() {
		return Render.call(this, this.props, this.state);
	}
}
