import Base from './base';
import Render from './render';
import { connect } from 'react-redux';

class Chancery extends Base {
  render() {
    return Render.call(this, this.props, this.state);
  }
}

function mapStateToProps(state) {
  return {
    chancery: state.adminData.chancery
  }
};

export default connect(mapStateToProps)(Chancery);
