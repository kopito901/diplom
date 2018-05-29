import Base from './base';
import Render from './render';
import { connect } from 'react-redux';

class StudentRoutes extends Base {
  render() {
    return Render.call(this, this.props, this.state);
  }
}

function mapStateToProps(state) {
  return {
    routes: state.routes,
    currentUser: state.users.currentUser
  }
};

export default connect(mapStateToProps)(StudentRoutes);
