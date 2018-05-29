import Base from './base';
import Render from './render';
import { connect } from 'react-redux';

class MainPageEdit extends Base {
  render() {
    return Render.call(this, this.props, this.state);
  }
}

function mapStateToProps(state) {
  return {
    mainPage: state.mainPage,
    currentUser: state.users.currentUser
  }
};

export default connect(mapStateToProps)(MainPageEdit);
