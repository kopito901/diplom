import Base from './base';
import Render from './render';
import { connect } from 'react-redux';

class ManagersTable extends Base {
  render() {
    return Render.call(this, this.props, this.state);
  }
}

function mapStateToProps(state) {
  return {
    managers: state.adminData.managers
  }
};

export default connect(mapStateToProps)(ManagersTable);
