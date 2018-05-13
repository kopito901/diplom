import React from 'react';
import UserRow from '../userRow';
import Sort from '../../../../../../classes/sort';

export default function(props, state) {
  function showStudents() {
    let students = props.students;

    switch (props.filter) {
      case 'course+':
        students.sort(Sort.courseAscendingSort);
        break;
      case 'course-':
        students.sort(Sort.courseDescendingSort);
        break;
      case 'department+':
        students.sort(Sort.departmentAscendingSort);
        break;
      case 'department-':
        students.sort(Sort.departmentDescendingSort);
        break;
      case 'group+':
        students.sort(Sort.groupAscendingSort);
        break;
      case 'group-':
        students.sort(Sort.groupDescendingSort);
        break;
    }

    return students.map((student, index) => {
      if(!!props.search.string) {
        switch (props.search.type) {
          case 'course':
            if(student.CourseId && student.CourseId.toString().indexOf(props.search.string) + 1) {
              return(
                <UserRow student={student} key={ student.id } />
              );
            }
            break;
          case 'department':
            if(student.Group && student.Group.Department.number.indexOf(props.search.string) + 1) {
              return(
                <UserRow student={student} key={ student.id } />
              );
            }
            break;
          case 'group':
            if(student.Group && student.Group.number.indexOf(props.search.string) + 1) {
              return(
                <UserRow student={student} key={ student.id } />
              );
            }
            break;
          default:
            if(student[props.search.type] && student[props.search.type].indexOf(props.search.string) + 1) {
              return(
                <UserRow student={student} key={ student.id } />
              );
            }
        }
      } else {
        return(
          <UserRow student={student} key={ student.id } />
        );
      }
    });
  };

  return (
    <table className="table table-hover students__table">
      <thead>
        <tr>
          <td></td>
          <td>Фамилия</td>
          <td>Имя</td>
          <td>Отчество</td>
          <td>Email</td>
          <td>Курс</td>
          <td>Отделение</td>
          <td>Группа</td>
        </tr>
      </thead>
      <tbody>
        { showStudents() }
      </tbody>
    </table>
  );
}
