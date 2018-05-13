import Base from './base';
import Render from './render';
import { connect } from 'react-redux';

class ManagerRow extends Base {
  render() {
    return Render.call(this, this.props, this.state);
  }
}

function mapStateToProps(state) {
  return {
    adminData: state.adminData
  }
};

export default connect(mapStateToProps)(ManagerRow);
