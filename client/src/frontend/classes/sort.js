const Sort = {
    courseDescendingSort: function(userA, userB) {
      if(userA.CourseId && userB.CourseId) {
        return userB.CourseId - userA.CourseId;
      } else {
        return 1;
      }
    },

    courseAscendingSort: function(userA, userB) {
      if(userA.CourseId && userB.CourseId) {
        return userA.CourseId - userB.CourseId;
      } else {
        return 1;
      }
    },

    departmentDescendingSort: function(userA, userB) {
        if(userA.Group && userB.Group) {
          if(userA.Group.Department.number > userB.Group.Department.number) return 1;
          if(userA.Group.Department.number < userB.Group.Department.number) return -1;
        } else {
          return 1;
        }
    },

    departmentAscendingSort: function(userA, userB) {
      if(userA.Group && userB.Group) {
        if(userA.Group.Department.number < userB.Group.Department.number) return 1;
        if(userA.Group.Department.number > userB.Group.Department.number) return -1;
      } else {
        return 1;
      }
    },

    groupDescendingSort: function(userA, userB) {
      if(userA.Group && userB.Group) {
        if(userA.Group.number > userB.Group.number) return 1;
        if(userA.Group.number < userB.Group.number) return -1;
      } else {
        return 1;
      }
    },

    groupAscendingSort: function(userA, userB) {
      if(userA.Group && userB.Group) {
        if(userA.Group.number < userB.Group.number) return 1;
        if(userA.Group.number > userB.Group.number) return -1;
      } else {
        return 1;
      }
    }
}

module.exports = Sort;
