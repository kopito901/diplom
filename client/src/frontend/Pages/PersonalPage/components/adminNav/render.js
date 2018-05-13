import React from 'react';
import { Link } from 'react-router-dom';

export default function(props, state) {
  return (
    <nav className="">
      <div className="">
        <ul className="">
          <li className=''>
            <Link to='/lk/admin/studentsList' className=''>Cтуденты</Link>
          </li>
          <li className=''>
            <Link to='/lk/admin/departmentsList' className=''>Отделения</Link>
          </li>
          <li className=''>
            <Link to='/lk/admin/office' className=''>Канцелярия</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
