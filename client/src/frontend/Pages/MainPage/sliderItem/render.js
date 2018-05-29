import React from 'react';

export default function(props, state) {
  let photo_url = props.photo.photo_url;
  let style = {
    backgroundImage: 'url(' + photo_url + ')'
  }

  return (
    <div className="album__item" style={style}>
      <div className="album__item_info">
        <h2 className="album__item_info-title">{props.photo.title}</h2>
        <p className="album__item_info-description">{props.photo.description}</p>
      </div>
    </div>
  );
}
