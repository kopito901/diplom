function createGetRequestBody() {
  return {
    method: 'GET',
    headers: {
      'Accept': 'application/json'
    },
    credentials: 'include'
  };
};

function createPostRequestBody(data) {
  return {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(data)
  };
};

function createDeleteRequestBody(data) {
  return {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    credentials: 'include',
    body: JSON.stringify(data)
  };
};

export async function getUsersList() {
  const response = await fetch('/api/v1/users/list', createGetRequestBody());
  const json = await response.json();

  return json;
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


export async function exit() {
  const response = await fetch('/api/v1/exit', createPostRequestBody(null));
  const json = await response.json();

  return json;
};
