import React from 'react';

export default function(props, state) {
  function buildDisciplines() {
    let disciplines = props.disciplines;

    return disciplines.map((discipline) => {
      return (
        <option value={discipline.id} key={discipline.id}>{discipline.name}</option>
      );
    });
  }

  return (
    <div className="tabs" id="js_tabs">
      <div className="tabs_main">
        <form className="tabs_main--item" ref={(form) => this.form = form}>
          <div className="form-group">
            <label htmlFor="teacher">Преподаватель:</label>
            <input type="text" className="form-control form-control-sm" placeholder="Введите ФИО преподавателя" name="teacher" id="teacher" ref={(input) => this.teacher = input }/>
          </div>
          <div className="input-group form-group">
            <select
              className="custom-select form-select"
              name="routeType"
              id="routeType"
              placeholder="Выберите тип направления"
              ref={(input) => this.typeSelect = input }
            >
              <option value="0" disabled>Выберите тип направления</option>
              <option value="зачет">Зачет</option>
              <option value="экзамен">Экзамен</option>
            </select>
            <div className="input-group-append">
              <label className="input-group-text" htmlFor="studentCourse">Тип пересдачи</label>
            </div>
          </div>
          <div className="input-group form-group">
            <select
              className="custom-select form-select"
              name="discipline"
              id="discipline"
              placeholder="Выберите тип направления"
              ref={(input) => this.disciplineSelect = input }
            >
              { buildDisciplines() }
            </select>
            <div className="input-group-append">
              <label className="input-group-text" htmlFor="discipline">Дисциплина</label>
            </div>
          </div>


          <button onClick={ this.addRoute }
            ref={(button) => this.submit = button }
            className='btn btn-secondary btn-sm'
            style={{marginTop:8+'px'}}
            >Добавить базу практики</button>
        </form>
      </div>
    </div>
  );
}
