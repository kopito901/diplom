import Base from './base';
import Render from './render';
import { connect } from 'react-redux';

class ChangedPair extends Base {
  render() {
    return Render.call(this, this.props, this.state);
  }
}

function mapStateToProps(state) {
  return {

  }
};

export default connect(mapStateToProps)(ChangedPair);
