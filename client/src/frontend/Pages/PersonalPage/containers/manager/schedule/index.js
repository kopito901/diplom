import Base from './base';
import Render from './render';
import { connect } from 'react-redux';

class Schedule extends Base {
  render() {
    return Render.call(this, this.props, this.state);
  }
}

function mapStateToProps(state) {
  return {
    schedule: state.schedule
  }
};

export default connect(mapStateToProps)(Schedule);
