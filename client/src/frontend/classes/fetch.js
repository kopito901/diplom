function createGetRequestBody() {
  return {
    method: 'GET',
    headers: {
      'Accept': 'application/json; charset=utf-8'
    },
    credentials: 'include'
  };
};

function createPostRequestBody(data) {
  return {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*; charset=utf-8',
      'Content-Type': 'application/json; charset=utf-8'
    },
    credentials: 'include',
    body: JSON.stringify(data)
  };
};

function createPostUploadRequestBody(form, id) {
  let formData = new FormData(form);

  formData.append('id', id)
  return {
    method: 'POST',
    credentials: 'include',
    body: formData
  };
};

function createDeleteRequestBody(data) {
  return {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json, text/plain, */*; charset=utf-8',
      'Content-Type': 'application/json; charset=utf-8'
    },
    credentials: 'include',
    body: JSON.stringify(data)
  };
};

export async function loginViaData(login, password) {
  const response = await fetch('/api/v1/users/auth', createPostRequestBody({ login : login, pass : password }));
  const json = await response.json();

  return json;
};

export async function loginViaCookies() {
  const response = await fetch('/api/v1/users/authViaCookies', createGetRequestBody());
  const json = await response.json();

  return json;
};

export async function exit() {
  const response = await fetch('/api/v1/exit', createPostRequestBody(null));
  const json = await response.json();

  return json;
};

export async function refreshCurrentUser(userId) {
  const response = await fetch('/api/v1/users/currentUser', createPostRequestBody(userId));
  const json = await response.json();

  return json;
};

export async function uploadImage(form, id) {
  const response = await fetch('/api/v1/users/uploadImage', createPostUploadRequestBody(form, id));
  const json = await response.json();

  return json;
};

export async function changePassword(data) {
  const response = await fetch('/api/v1/users/changePassword', createPostRequestBody(data));
  const json = await response.json();

  return json;
};

export async function getUsersList() {
  const response = await fetch('/api/v1/users/list', createGetRequestBody());
  const json = await response.json();

  return json;
};

export async function getDepartmentInfo(id) {
  const response = await fetch('/api/v1/departments/info', createPostRequestBody({ id: id }));
  const json = await response.json();

  return json;
};

export async function setDepartmentInfo(data) {
  const response = await fetch('/api/v1/departments/info/set', createPostRequestBody(data));
  const json = await response.json();

  return json;
};

export async function getDepartmentsList() {
  const response = await fetch('/api/v1/departments/list', createGetRequestBody());
  const json = await response.json();

  return json;
};

export async function getManagersList() {
  const response = await fetch('/api/v1/managers/list', createGetRequestBody());
  const json = await response.json();

  return json;
};

export async function addManager(data) {
  const response = await fetch('/api/v1/managers/add', createPostRequestBody(data));
  const json = await response.json();

  return json;
};

export async function deleteManager(data) {
  const response = await fetch('/api/v1/managers/delete', createDeleteRequestBody({ data : data }));
  const json = await response.json();

  return json;
};

export async function getManagersStudents(data) {
  const response = await fetch('/api/v1/managers/studentsList', createPostRequestBody({ departmentId : data }));
  const json = await response.json();

  return json;
};

export async function getPracticsList(data) {
  const response = await fetch('/api/v1/practics/list', createPostRequestBody({ departmentId : data }));
  const json = await response.json();

  return json;
};

export async function addBase(form, id) {
  const response = await fetch('/api/v1/practics/add', createPostUploadRequestBody(form, id));
  const json = await response.json();

  return json;
};

export async function deleteBase(id) {
  const response = await fetch('/api/v1/practics/delete', createPostRequestBody({ id: id}));
  const json = await response.json();

  return json;
};

export async function getManagersGroups(data) {
  const response = await fetch('/api/v1/managers/groupsList', createPostRequestBody({ departmentId : data }));
  const json = await response.json();

  return json;
};

export async function addPair(data) {
  const response = await fetch('/api/v1/managers/group/addPair', createPostRequestBody(data));
  const json = await response.json();

  return json;
};

export async function deleteChange(id) {
  const response = await fetch('/api/v1/managers/group/deleteChange', createPostRequestBody(id));
  const json = await response.json();

  return json;
};

export async function getBuildingsSchedule(data) {
  const response = await fetch('/api/v1/managers/group/getBuildingSchedule', createPostRequestBody({ id: data}));
  const json = await response.json();

  return json;
};

export async function selectBuildingSchedule(data) {
  const response = await fetch('/api/v1/managers/group/buildingSchedule', createPostRequestBody(data));
  const json = await response.json();

  return json;
};

export async function getMarks(data) {
  const response = await fetch('/api/v1/managers/student/marksList', createPostRequestBody({ id: data}));
  const json = await response.json();

  return json;
};

export async function setMark(data) {
  const response = await fetch('/api/v1/managers/student/setMark', createPostRequestBody(data));
  const json = await response.json();

  return json;
};

export async function uploadAlbumItem(form, id) {
  const response = await fetch('/api/v1/album/add', createPostUploadRequestBody(form, id));
  const json = await response.json();

  return json;
};

export async function deleteAlbumItem(id) {
  const response = await fetch('/api/v1/album/delete', createPostRequestBody({ id: id }));
  const json = await response.json();

  return json;
};

export async function getAlbum(data) {
  const response = await fetch('/api/v1/album/list', createPostRequestBody(data));
  const json = await response.json();

  return json;
};

export async function getDepartmentsListWithCount() {
  const response = await fetch('/api/v1/departments/listWithCount', createGetRequestBody());
  const json = await response.json();

  return json;
};

export async function getGroupsList(departmentId) {
  const response = await fetch('/api/v1/groups/list', createPostRequestBody({ departmentId: departmentId }));
  const json = await response.json();

  return json;
};

export async function addGroup(data) {
  const response = await fetch('/api/v1/groups/add', createPostRequestBody(data));
  const json = await response.json();

  return json;
};

export async function deleteGroup(data) {
  const response = await fetch('/api/v1/groups/delete', createDeleteRequestBody({ data : data }));
  const json = await response.json();

  return json;
};

export async function getSchedule(data) {
  const response = await fetch('/api/v1/groups/schedule', createPostRequestBody({ id : data }));
  const json = await response.json();

  return json;
};

export async function getStudentsList() {
  const response = await fetch('/api/v1/students/list', createGetRequestBody());
  const json = await response.json();

  return json;
};

export async function getChancery() {
  const response = await fetch('/api/v1/chancery/list', createGetRequestBody());
  const json = await response.json();

  return json;
};

export async function editChanceryEmail(data) {
  const response = await fetch('/api/v1/chancery/edit', createPostRequestBody({ data: data }));
  const json = await response.json();

  return json;
};

export async function updateBasePractic(data) {
  const response = await fetch('/api/v1/students/updateBase', createPostRequestBody(data));
  const json = await response.json();

  return json;
};

export async function deleteStudent(data) {
  const response = await fetch('/api/v1/students/delete', createDeleteRequestBody({ data : data }));
  const json = await response.json();

  return json;
};

export async function addStudent(data) {
  const response = await fetch('/api/v1/students/add', createPostRequestBody(data));
  const json = await response.json();

  return json;
};

export async function editStudent(data) {
  const response = await fetch('/api/v1/students/edit', createPostRequestBody(data));
  const json = await response.json();

  return json;
};

export async function transferStudents() {
  const response = await fetch('/api/v1/students/transfer', createPostRequestBody(null));
  const json = await response.json();

  return json;
};

export async function getBoss(data) {
  const response = await fetch('/api/v1/student/boss', createPostRequestBody(data));
  const json = await response.json();

  return json;
};


export async function getDays() {
  const response = await fetch('/api/v1/days/list', createGetRequestBody());
  const json = await response.json();

  return json;
};

export async function getBuildings() {
  const response = await fetch('/api/v1/buildings/list', createGetRequestBody());
  const json = await response.json();

  return json;
};

export async function getRoutes(id) {
  const response = await fetch('/api/v1/routes/list', createPostRequestBody(id));
  const json = await response.json();

  return json;
};

export async function addRoute(data) {
  const response = await fetch('/api/v1/routes/add', createPostRequestBody(data));
  const json = await response.json();

  return json;
};

export async function deleteRoute(id) {
  const response = await fetch('/api/v1/routes/delete', createPostRequestBody(id));
  const json = await response.json();

  return json;
};

export async function printDoc(data) {
  fetch('/api/v1/routes/print', {
    method: 'POST',
    header: {
      'Accept': 'application/vnd.wap.wmlscriptc, text/vnd.wap.wml, application/vnd.wap.xhtml+xml, application/xhtml+xml, text/html, multipart/mixed, */*'
    },
    credentials: 'include',
    body: JSON.stringify(data)})
      .then((data) => data.blob())
      .then((blob) => {
        var url = window.URL.createObjectURL(blob);
            var a = document.createElement('a');
            a.href = url;
            a.download = "out.docx";
            a.click();
      });
};

export async function sendEmail(data) {
  const response = await fetch('/api/v1/chancery/sendEmail', createPostRequestBody(data));
  const json = await response.json();

  return json;
};
