import Base from './base';
import Render from './render';

import { connect } from 'react-redux';

export default class PersonalPage extends Base {
  render() {
    return Render.call(this, this.props, this.state);
  }
}
