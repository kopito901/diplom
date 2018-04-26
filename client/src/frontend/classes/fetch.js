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

export async function getUsersList() {
  const response = await fetch('/api/v1/users/list', createGetRequestBody());
  const json = await response.json();

  return json;
};

export async function loginViaData(login, password) {
  const response = await fetch('/api/v1/users/auth', createPostRequestBody({ login : login, pass : password}));
  const json = await response.json();

  return json;
};

export async function loginViaCookies() {
  const response = await fetch('/api/v1/users/auth', createGetRequestBody());
  const json = await response.json();

  return json;
};
