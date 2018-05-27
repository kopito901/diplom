import React from 'react';

export default function(props, state) {
  return (
    <form className="form form_edit-avatar" ref={(form) => this.editAvatarForm = form }>
      <h2 className="admin__title">Изменение аватара</h2>

      <div className="input-group mb-3">
        <div className="custom-file">
          <input type="file" className="custom-file-input" id="avatar" name="avatar" ref={(input) => this.file = input } />
          <label className="custom-file-label" htmlFor="avatar">Фотография</label>
        </div>
      </div>
      <button onClick={ this.uploadAvatar }
        ref={(button) => this.editAvatar = button }
        className='btn btn-secondary btn-sm'
        >Изменить фото</button>
    </form>
  );
}
