import Base from './base';
import Render from './render';
import { connect } from 'react-redux';

class MainEditPassword extends Base {
  render() {
    return Render.call(this, this.props, this.state);
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.users.currentUser
  }
};

export default connect(mapStateToProps)(MainEditPassword);
