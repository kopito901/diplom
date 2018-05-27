import React from 'react';

export default function(props, state) {
  return (
    <div className="album__controls">
      <div className="tabs" id="js_tabs">
        <div className="tabs_main">
          <form className="tabs_main--item" ref={(form) => this.form = form }>
            <h2 className="admin__title">Добавление фото</h2>
            <div className="form-group">
              <label htmlFor="title">Заголовок фото:</label>
              <input type="text" className="form-control form-control-sm" placeholder="Введите заголовок" name="title" id="title" ref={(input) => this.title = input }/>
            </div>
            <div className="form-group">
              <label htmlFor="description">Описание:</label>
              <textarea className="form-control" id="description" name="description" rows="3"></textarea>
            </div>
            <div className="custom-file">
              <input type="file" className="custom-file-input" id="photo" name="photo" ref={(input) => this.photo = input } />
              <label className="custom-file-label" htmlFor="photo">Фотография</label>
            </div>
            <button onClick={ this.addPhoto }
              ref={(button) => this.submit = button }
              className='btn btn-secondary btn-sm'
              >Выложить фото</button>
          </form>
        </div>
      </div>
    </div>
  );
}
