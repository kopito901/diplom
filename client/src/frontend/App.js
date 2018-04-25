import Base from './AppBase';
import Render from './AppRender';

export default class App extends Base {
  render() {
    return Render.call(this, this.props, this.state);
  }
}
