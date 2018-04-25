import Base from './base';
import Render from './render';

import { connect } from 'react-redux';

class PersonalPage extends Base {
  render() {
    return Render.call(this, this.props, this.state);
  }
}

export default connect(
  (state, ownProps) => ({
    users: state.users
  }),
  dispatch => ({
    onAdd : (name) => {
      const user = name;
      dispatch({ type : 'ADD_USER', payload : user });
    }
  })
)(PersonalPage);
