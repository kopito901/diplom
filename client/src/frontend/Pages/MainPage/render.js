import React from 'react';
import Slider from 'react-slick';
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

  function buildAlbum() {
    if(props.mainPage && props.mainPage.info[0] && props.mainPage.info[0].isAlbumActive) {
      var settings = {
         dots: true,
         infinite: true,
         speed: 500,
         slidesToShow: 1,
         slidesToScroll: 1
       };

      return (
        <div className="album__slider">
          <Slider {...settings}>
            { buildSliderItems() }
          </Slider>
        </div>
      );
    }
  }

  let title = (props.mainPage.info[0] && props.mainPage.info[0].title)? props.mainPage.info[0].title: '',
    text = (props.mainPage.info[0] && props.mainPage.info[0].text)? props.mainPage.info[0].text: '';

  return (
    <div className="main-page">
      <h2 className="title">Отделение { props.currentUser.Group.Department.number }: { props.currentUser.Group.Department.name } </h2>
      { buildAlbum() }
      <div className="main-page__wrapper">
        <div className="main-page__title">
          <h2 className="font-italic">{title}</h2>
        </div>
        <p style={{marginTop: 10+'px'}}>{text}</p>
      </div>
    </div>
  );
}
