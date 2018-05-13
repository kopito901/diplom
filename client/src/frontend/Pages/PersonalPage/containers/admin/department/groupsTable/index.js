import Base from './base';
import Render from './render';
import { connect } from 'react-redux';

class GroupsTable extends Base {
  render() {
    return Render.call(this, this.props, this.state);
  }
}

function mapStateToProps(state) {
  return {
    departmentsGroup: state.adminData.departmentsGroup
  }
};

export default connect(mapStateToProps)(GroupsTable);
