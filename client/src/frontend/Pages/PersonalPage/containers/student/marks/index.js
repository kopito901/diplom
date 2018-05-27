import Base from './base';
import Render from './render';
import { connect } from 'react-redux';

class Marks extends Base {
  render() {
    return Render.call(this, this.props, this.state);
  }
}

function mapStateToProps(state) {
  return {
    schedule: state.schedule,
    users: state.users
  }
};

export default connect(mapStateToProps)(Marks);
