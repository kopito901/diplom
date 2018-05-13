import Base from './base';
import Render from './render';
import { connect } from 'react-redux';

class StudentsTable extends Base {
  render() {
    return Render.call(this, this.props, this.state);
  }
}

function mapStateToProps(state) {
  return {
    students: state.users.usersList.students,
    filter: state.adminData.filter,
    search: state.adminData.search
  }
};

export default connect(mapStateToProps)(StudentsTable);
