import Base from './base';
import Render from './render';
import { connect } from 'react-redux';

class SearchBar extends Base {
  render() {
    return Render.call(this, this.props, this.state);
  }
}

function mapStateToProps(state) {
  return {
    searchString: state.adminData.searchString
  }
};

export default connect(mapStateToProps)(SearchBar);
