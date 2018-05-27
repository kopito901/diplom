import Base from './base';
import Render from './render';
import { connect } from 'react-redux';

class Album extends Base {
  render() {
    return Render.call(this, this.props, this.state);
  }
}

function mapStateToProps(state) {
  return {
    currentUser: state.users.currentUser,
    album: state.album
  }
};

export default connect(mapStateToProps)(Album);
