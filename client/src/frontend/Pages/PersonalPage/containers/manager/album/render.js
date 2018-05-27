import React from 'react';
import Slider from 'react-slick';
import AlbumControls from './albumControls';
import SliderItem from './sliderItem';

export default function(props, state) {
  function buildSliderItems() {
    let items = props.album.list;

    if(items.length) {
      return items.map((item) => {
        return <SliderItem photo={item} key={item.id}/>
      });
    } else {
      return(
        <h2>Тут пока-что ничего нет</h2>
      );
    }
  }
  var settings = {
     dots: true,
     infinite: true,
     speed: 500,
     slidesToShow: 1,
     slidesToScroll: 1
   };

  return (
    <div className="album">
      <div className="album__slider">
        <Slider {...settings}>
          { buildSliderItems() }
        </Slider>
      </div>
      <AlbumControls />
    </div>
  );
}
