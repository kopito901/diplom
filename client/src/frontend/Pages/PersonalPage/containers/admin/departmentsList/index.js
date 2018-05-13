import Base from './base';
import Render from './render';
import { connect } from 'react-redux';

class DepartmentsList extends Base {
  render() {
    return Render.call(this, this.props, this.state);
  }
}

function mapStateToProps(state) {
  return {
    departments: state.departments
  }
};

export default connect(mapStateToProps)(DepartmentsList);
