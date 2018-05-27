import React from 'react';
import { Link } from 'react-router-dom';

export default function(props, state) {
  function buildMenu() {
    switch (props.currentUser.AccessId) {
      case 'a':
        return (
          <div>
            <span className="aside__user">
              <img src={ props.currentUser.photo_url } alt={ props.currentUser.name }/>
              <span className="aside__user_name">{ props.currentUser.name } { props.currentUser.surname }</span>
            </span>
            <nav className="aside__menu">
              <ul className="aside__list">
                <li className='aside__list_item'>
                  <Link to='/lk/admin/studentsList' className='aside__list_link'>Студенты</Link>
                </li>
                <li className='aside__list_item'>
                  <Link to='/lk/admin/departmentsList' className='aside__list_link'>Отделения</Link>
                </li>
                <li className='aside__list_item'>
                  <Link to='/lk/admin/managersList' className='aside__list_link'>Заведующие</Link>
                </li>
                <li className='aside__list_item'>
                  <Link to='/lk/admin/chancery' className='aside__list_link'>Канцелярия</Link>
                </li>
              </ul>
            </nav>
          </div>
        );
        break;

      case 'z':
        return (
          <div>
            <span className="aside__user">
              <img src={ props.currentUser.photo_url } alt={ props.currentUser.name }/>
              <Link to='/lk/manager/personalPage' className="aside__user_name">{ props.currentUser.name } { props.currentUser.surname }</Link>
            </span>
            <nav className="aside__menu">
              <ul className="aside__list">
                <li className='aside__list_item'>
                  <Link to='/lk/manager/studentsList' className='aside__list_link'>Студенты</Link>
                </li>
                <li className='aside__list_item'>
                  <Link to='/lk/manager/groupsList' className='aside__list_link'>Группы</Link>
                </li>
                <li className='aside__list_item'>
                  <Link to='/lk/manager/photoalbum' className='aside__list_link'>Фотоальбом</Link>
                </li>
                <li className='aside__list_item'> 
                  <Link to='/lk/manager/practics' className='aside__list_link'>Базы практик</Link>
                </li>
                <li className='aside__list_item'>
                  <Link to='/lk/manager' className='aside__list_link'>Страница отделения</Link>
                </li>
              </ul>
            </nav>
          </div>

        );
        break;

        case 's':
          return (
            <div>
              <span className="aside__user">
                <img src={ props.currentUser.photo_url } alt={ props.currentUser.name }/>
                <Link to='/lk/student/personalPage' className="aside__user_name">{ props.currentUser.name } { props.currentUser.surname }</Link>
              </span>
              <nav className="aside__menu">
                <ul className="aside__list">
                  <li className='aside__list_item'>
                    <Link to='/lk/student/marks' className='aside__list_link'>Оценки</Link>
                  </li>
                  <li className='aside__list_item'>
                    <Link to='/lk/student/schedule' className='aside__list_link'>Расписание</Link>
                  </li>
                  <li className='aside__list_item'>
                    <Link to='/lk/student/practics' className='aside__list_link'>База практики</Link>
                  </li>
                  <li className='aside__list_item'>
                    <Link to='/lk/student/references' className='aside__list_link'>Заказ справок</Link>
                  </li>
                  <li className='aside__list_item'>
                    <Link to='/lk/student/print' className='aside__list_link'>Печать направлений</Link>
                  </li>
                </ul>
              </nav>
            </div>

          );
          break;

      default:
        break;
    }
  }

  return (
    <aside className="aside" id="aside">
      { buildMenu() }
    </aside>
  );
}
