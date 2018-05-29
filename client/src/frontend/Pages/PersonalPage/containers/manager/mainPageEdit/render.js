import React from 'react';

export default function(props, state) {
  return (
    <div>
      <h2 className="title">Редактирование страницы отделения</h2>
      <form ref={(form) => this.form = form }>
        <div className="form-group">
          <label htmlFor="title">Заголовок страницы:</label>
          <input type="text" className="form-control form-control-sm" defaultValue={state.title} onChange={this.inputTitle} placeholder="Введите заголовок" name="title" id="title" ref={(input) => this.title = input }/>
        </div>
        <div className="form-group">
          <label htmlFor="description">Описание:</label>
          <textarea className="form-control" id="description" name="description" defaultValue={state.text} onChange={this.inputText} rows="3" ref={(input) => this.description = input }></textarea>
        </div>
        <div className="input-group">
          <div className="input-group-text">
            <input type="checkbox" id="isAlbum" name="isAlbum" defaultChecked={state.isAlbum} onChange={this.checkAlbum} ref={(input) => this.isAlbum = input }/>
            <span style={{marginLeft: 5 + 'px'}}>Вывод фотоальбома</span>
          </div>
        </div>
        <button onClick={ this.addInfo }
          ref={(button) => this.submit = button }
          className='btn btn-secondary btn-sm'
          style={{marginTop: 8+'px'}}>Изменить информацию</button>
      </form>
    </div>
  );
}
