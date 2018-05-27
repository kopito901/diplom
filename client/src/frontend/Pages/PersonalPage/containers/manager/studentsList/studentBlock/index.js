import Base from './base';
import Render from './render';
import { connect } from 'react-redux';

class StudentBlock extends Base {
  render() {
    return Render.call(this, this.props, this.state);
  }
}

function mapStateToProps(state) {
  return {
    managerData: state.managerData,
    practics: state.practics.list
  }
};

export default connect(mapStateToProps)(StudentBlock);
