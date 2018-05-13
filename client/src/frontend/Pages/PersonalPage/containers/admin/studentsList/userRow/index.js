import Base from './base';
import Render from './render';
import { connect } from 'react-redux';

class UserRow extends Base {
  render() {
    return Render.call(this, this.props, this.state);
  }
}

function mapStateToProps(state, ownProps) {
  return {
    users: state.users,
    adminData: state.adminData,
    className: ownProps.className
  }
};

export default connect(mapStateToProps)(UserRow);
