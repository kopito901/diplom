import Base from './base';
import Render from './render';
import { connect } from 'react-redux';

class PracticBlock extends Base {
  render() {
    return Render.call(this, this.props, this.state);
  }
}

function mapStateToProps(state) {
  return {
    managerData: state.managerData,
    currentUser: state.users.currentUser
  }
};

export default connect(mapStateToProps)(PracticBlock);
