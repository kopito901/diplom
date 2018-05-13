import Base from './base';
import Render from './render';
import { connect } from 'react-redux';

class DepartmentsTable extends Base {
  render() {
    return Render.call(this, this.props, this.state);
  }
}

function mapStateToProps(state) {
  return {
    departmentsCount: state.adminData.departmentsCount
  }
};

export default connect(mapStateToProps)(DepartmentsTable);
