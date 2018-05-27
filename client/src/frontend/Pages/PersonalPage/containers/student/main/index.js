import Base from './base';
import Render from './render';
import { connect } from 'react-redux';

class Main extends Base {
  render() {
    return Render.call(this, this.props, this.state);
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.users.currentUser,
    studentData: state.studentData
  }
};

export default connect(mapStateToProps)(Main);
