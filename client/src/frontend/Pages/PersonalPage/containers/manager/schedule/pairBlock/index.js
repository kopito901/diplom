import Base from './base';
import Render from './render';
import { connect } from 'react-redux';

class PairBlock extends Base {
  render() {
    return Render.call(this, this.props, this.state);
  }
}

function mapStateToProps(state, ownProps) {
  return {
    schedule: state.schedule
  }
};

export default connect(mapStateToProps)(PairBlock);
