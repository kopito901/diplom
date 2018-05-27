import Base from './base';
import Render from './render';
import { connect } from 'react-redux';

class GroupBlock extends Base {
  render() {
    return Render.call(this, this.props, this.state);
  }
}

function mapStateToProps(state) {
  return {
    managerData: state.managerData
  }
};

export default connect(mapStateToProps)(GroupBlock);
