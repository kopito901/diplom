import React from 'react';

export default function(props, state) {
  function buildWeekSelect() {
    let week = props.week;

    return week.map((day) => {
      return (
        <option value={day.id} key={day.id}>{day.name}</option>
      );
    });
  }

  return (
    <div className="tabs" id="js_tabs">
      <div className="tabs_main">
        <form className="tabs_main--item" ref={(form) => this.form = form }>
          <div className="input-group form-group">
            <select className="custom-select form-select" name="day" id="day" ref={(input) => this.day = input }>
              { buildWeekSelect() }
            </select>
            <div className="input-group-append">
              <label className="input-group-text" htmlFor="day">День недели</label>
            </div>
          </div>
          <div className="input-group form-group">
            <select className="custom-select form-select" name="pairNumber" id="pairNumber" ref={(input) => this.pairCount = input }>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
            <div className="input-group-append">
              <label className="input-group-text" htmlFor="pairNumber">Номер пары</label>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="pair">Предмет:</label>
            <input type="text" className="form-control form-control-sm" placeholder="Введите название предмета" name="pair" id="pair" ref={(input) => this.pair = input }/>
          </div>
          <button onClick={ this.addChange }
            ref={(button) => this.submit = button }
            className='btn btn-secondary btn-sm'
            >Добавить изменение</button>
        </form>
      </div>
    </div>
  );
}
