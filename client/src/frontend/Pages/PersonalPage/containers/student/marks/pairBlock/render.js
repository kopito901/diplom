import React from 'react';

export default function(props, state) {
  let pair = props.pair[0],
    mark = (props.mark[0])? props.mark[0].mark : 'нет оценки';

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
            className="form-control"
            defaultValue={state.name}
            placeholder="Введите предмет"
            onChange={this.handleChangeName}
            disabled
            ref={(input) => this.pairName = input }
          />
          <div className="schedule__row_mark"><span>{mark}</span></div>
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
        </div>
      </div>
    );
  }
}
