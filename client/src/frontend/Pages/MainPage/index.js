import Base from './base';
import Render from './render';
import { connect } from 'react-redux';

class MainPage extends Base {
  render() {
    return Render.call(this, this.props, this.state);
  }
}

function mapStateToProps(state) {
  return {
    album: state.album,
    currentUser: state.users.currentUser,
    mainPage: state.mainPage
  }
};

export default connect(mapStateToProps)(MainPage);
