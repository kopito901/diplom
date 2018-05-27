import React from 'react';

export default function(props, state) {
  let pair = props.pair[0];

  if(pair) {
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
            className="form-control"
            defaultValue={state.name}
            placeholder="Введите предмет"
            onChange={this.handleChange}
            ref={(input) => this.pairName = input }
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={this.addPair}
              ref={(button) => this.addPairBtn = button }
            >
              Button
            </button>
          </div>
        </div>
      </div>
    );
  } else {
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
            className="form-control"
            placeholder="Введите предмет"
            ref={(input) => this.pairName = input }
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={this.addPair}
              ref={(button) => this.addPairBtn = button }
            >
              Button
            </button>
          </div>
        </div>
      </div>
    );
  }
}
