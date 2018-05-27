import React from 'react';

export default function(props, state) {
  return (
    <div className="tabs" id="js_tabs">
      <div className="tabs_main">
        <form className="tabs_main--item" ref={(form) => this.form = form}>
          <div className="form-group">
            <label htmlFor="title">Название организации:</label>
            <input type="text" className="form-control form-control-sm" placeholder="Введите название" name="title" id="title" ref={(input) => this.title = input }/>
          </div>
          <div className="form-group">
            <label htmlFor="adress">Адрес:</label>
            <input type="text" className="form-control form-control-sm" placeholder="Введите адрес" name="adress" id="adress" ref={(input) => this.adress = input }/>
          </div>
          <div className="form-group">
            <label htmlFor="phone">Номер телефона:</label>
            <input type="text" className="form-control form-control-sm" placeholder="Введите заголовок" name="phone" id="phone" ref={(input) => this.phone = input }/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Электронная почта:</label>
            <input type="text" className="form-control form-control-sm" placeholder="Введите email" name="email" id="email" ref={(input) => this.email = input }/>
          </div>
          <div className="form-group">
            <label htmlFor="site">Сайт:</label>
            <input type="text" className="form-control form-control-sm" placeholder="Введите ссылку на сайт" name="site" id="site" ref={(input) => this.site = input }/>
          </div>

          <div className="custom-file">
            <input type="file" className="custom-file-input" id="photo" name="photo" ref={(input) => this.photo = input } />
            <label className="custom-file-label" htmlFor="photo">Фотография</label>
          </div>
          <button onClick={ this.addBase }
            ref={(button) => this.submit = button }
            className='btn btn-secondary btn-sm'
            >Добавить базу практики</button>
        </form>
      </div>
    </div>
  );
}
