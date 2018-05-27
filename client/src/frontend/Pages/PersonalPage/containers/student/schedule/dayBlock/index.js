import Base from './base';
import Render from './render';
import { connect } from 'react-redux';

class DayBlock extends Base {
  render() {
    return Render.call(this, this.props, this.state);
  }
}

function mapStateToProps(state, ownProps) {
  return {
    pairs: ownProps.pairs
  }
};

export default connect(mapStateToProps)(DayBlock);
