import Base from './base';
import Render from './render';
import { connect } from 'react-redux';

class BasePractic extends Base {
  render() {
    return Render.call(this, this.props, this.state);
  }
}

function mapStateToProps(state) {
  return {
    practic: state.users.currentUser.Practic
  }
};

export default connect(mapStateToProps)(BasePractic);
