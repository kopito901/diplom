import Base from './base';
import Render from './render';
import { connect } from 'react-redux';

class StudentsList extends Base {
  render() {
    return Render.call(this, this.props, this.state);
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.users.currentUser,
    managerData: state.managerData,
    practics: state.practics
  }
};

export default connect(mapStateToProps)(StudentsList);
