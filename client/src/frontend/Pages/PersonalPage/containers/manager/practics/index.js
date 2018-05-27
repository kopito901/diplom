import Base from './base';
import Render from './render';
import { connect } from 'react-redux';

class Practics extends Base {
  render() {
    return Render.call(this, this.props, this.state);
  }
}

function mapStateToProps(state) {
  return {
    practics: state.practics,
    users: state.users
  }
};

export default connect(mapStateToProps)(Practics);
