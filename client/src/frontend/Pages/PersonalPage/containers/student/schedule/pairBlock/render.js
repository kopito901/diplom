import React from 'react';
import _ from 'lodash';

export default function(props, state) {
  let pair = props.pair[0],
    className = '';

  if(props.pair) {
    let changedPair = _.filter(props.pair, _.matches({ isChange: true }));
    if(changedPair[0]) {
      pair = changedPair[0];
    }
  }

  className = (pair && pair.isChange)? 'form-control form-control-changed':'form-control';

  return (
    <div className="schedule__row">
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          placeholder="Recipient's username"
          value={props.pairCount}
          disabled
          hidden
          ref={(input) => this.pairCount = input }
        />
        <input
          type="text"
          className={className}
          defaultValue={state.name}
          placeholder="Введите предмет"
          onChange={this.handleChange}
          disabled
          ref={(input) => this.pairName = input }
        />
      </div>
    </div>
  );
}
