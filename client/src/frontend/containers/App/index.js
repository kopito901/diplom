import Base from './Base';
import Render from './Render';

import { connect } from 'react-redux';

export default class App extends Base {
  render() {
    return Render.call(this, this.props, this.state);
  }
}
