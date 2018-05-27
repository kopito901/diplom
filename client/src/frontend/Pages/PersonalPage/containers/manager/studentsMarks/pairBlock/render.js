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

  if(pair) {
    return (
      <div className="schedule__row">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
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
            onChange={this.handleChangeName}
            disabled
            ref={(input) => this.pairName = input }
          />
          <select
            className="custom-select form-select"
            name="studentMark"
            id="studentMark"
            placeholder="Выберите оценку"
            onChange={this.handleChangeMark}
            defaultValue={state.mark}
            ref={(input) => this.markSelect = input }
          >
            <option value="0" disabled>Выберите оценку</option>
            <option value="1">н/б</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={this.addMark}
              ref={(button) => this.addMarkBtn = button }
            >
              Проставить
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
            hidden
            disabled
            ref={(input) => this.pairName = input }
          />
          <div className="input-group-append">
            <button
              className="btn btn-outline-secondary"
              type="button"
              onClick={this.addPair}
              hidden
              disabled
              ref={(button) => this.addPairBtn = button }
            >
              Поставить оценку
            </button>
          </div>
        </div>
      </div>
    );
  }
}
