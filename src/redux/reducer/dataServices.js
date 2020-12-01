/* eslint-disable no-use-before-define */
/* eslint-disable no-restricted-globals */
// import { authHeader } from '../_helpers';

export const dataServices = {
  getChartData,
};

function getChartData() {
  const requestOptions = {
    method: 'GET',
  };
  console.log(requestOptions);

  return fetch(
    'https://my-json-server.typicode.com/namachivayamd/assignment-kloudone/pieData',
    requestOptions
  ).then(handleResponse);
}

function handleResponse(response) {
  return response.text().then(text => {
    const data = text && JSON.parse(text);
    console.log(data);

    if (!response.ok) {
      if (response.status === 401) {
        // auto logout if 401 response returned from api
        // logout();
        location.reload(true);
      }

      const error = (data && data.message) || response.statusText;
      return Promise.reject(error);
    }

    return data;
  });
}
