import React from 'react';
import StudentsControls from './studentsControls';
import StudentBlock from './studentBlock';
import Sort from '../../../../../classes/sort';

export default function(props, state) {
  function buildStudents() {
    let students = props.managerData.students.list;

    switch (props.managerData.students.filter) {
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

    return students.map((student) => {
      if(!!props.managerData.students.search.string) {
        switch (props.managerData.students.search.type) {
          case 'course':
            if(student.CourseId && student.CourseId.toString().indexOf(props.managerData.students.search.string) + 1) {
              return(
                <StudentBlock student={student} key={ student.id } />
              );
            }
            break;
          case 'group':
            if(student.Group && student.Group.number.toString(). indexOf(props.managerData.students.search.string) + 1) {
              return(
                <StudentBlock student={student} key={ student.id } />
              );
            }
            break;
          default:
            if(student[props.managerData.students.search.type] && student[props.managerData.students.search.type].indexOf(props.managerData.students.search.string) + 1) {
              return(
                <StudentBlock student={student} key={ student.id } />
              );
            }
        }
      } else {
        return(
          <StudentBlock student={student} key={ student.id } />
        );
      }
    });
  }

  return (
    <div>
      <StudentsControls />
      { buildStudents() }
    </div>
  );
}
