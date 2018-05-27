const _ = require('lodash');

const Sort = {
    nameDescendingSort: function(itemA, itemB) {
      if(itemA.number && itemB.number) {
        if(itemA.number < itemB.number) return 1;
        if(itemA.number > itemB.number) return -1;
      } else {
        return 1;
      }
    },

    nameAscendingSort: function(itemA, itemB) {
      if(itemA.number && itemB.number) {
        if(itemA.number > itemB.number) return 1;
        if(itemA.number < itemB.number) return -1;
      } else {
        return 1;
      }
    },

    studentCountDescendingSort: function(itemA, itemB) {
      if(!_.isUndefined(itemA.usersCount) && !_.isUndefined(itemB.usersCount)) {
        if(itemA.usersCount < itemB.usersCount) return 1;
        if(itemA.usersCount > itemB.usersCount) return -1;
      } else {
        return 1;
      }
    },

    studentCountAscendingSort: function(itemA, itemB) {
      if(!_.isUndefined(itemA.usersCount) && !_.isUndefined(itemB.usersCount)) {
        if(itemA.usersCount > itemB.usersCount) return 1;
        if(itemA.usersCount < itemB.usersCount) return -1;
      } else {
        return 1;
      }
    },

    courseDescendingSort: function(itemA, itemB) {
      if(itemA.CourseId && itemB.CourseId) {
        return itemB.CourseId - itemA.CourseId;
      } else {
        return 1;
      }
    },

    courseAscendingSort: function(itemA, itemB) {
      if(itemA.CourseId && itemB.CourseId) {
        return itemA.CourseId - itemB.CourseId;
      } else {
        return 1;
      }
    },

    departmentDescendingSort: function(itemA, itemB) {
        if(itemA.Group && itemB.Group) {
          if(itemA.Group.Department.number > itemB.Group.Department.number) return 1;
          if(itemA.Group.Department.number < itemB.Group.Department.number) return -1;
        } else {
          return 1;
        }
    },

    departmentAscendingSort: function(itemA, itemB) {
      if(itemA.Group && itemB.Group) {
        if(itemA.Group.Department.number < itemB.Group.Department.number) return 1;
        if(itemA.Group.Department.number > itemB.Group.Department.number) return -1;
      } else {
        return 1;
      }
    },

    groupDescendingSort: function(itemA, itemB) {
      if(itemA.Group && itemB.Group) {
        if(itemA.Group.number > itemB.Group.number) return 1;
        if(itemA.Group.number < itemB.Group.number) return -1;
      } else {
        return 1;
      }
    },

    groupAscendingSort: function(itemA, itemB) {
      if(itemA.Group && itemB.Group) {
        if(itemA.Group.number < itemB.Group.number) return 1;
        if(itemA.Group.number > itemB.Group.number) return -1;
      } else {
        return 1;
      }
    }
}

module.exports = Sort;
