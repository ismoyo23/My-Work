import axios from 'axios';

// ==============================================
// action get data Author
export let homeGet = (data, headers) => ({
  type: 'HOME_GET',
  payload: axios({
    method: 'GET',
    url: `${data.ConUrl}auth/user${data.search}${data.sort}`,
    headers: headers,
  }),
});

// // ==============================================
// // action Add data Author
// export let addData = (data, form) => ({
//   type: 'PROCESS_HOME',
//   payload: axios({
//     method: data.Method,
//     url: data.ConUrl,
//     data: form,
//   }),
// });

// // ===============================================
// // action delete data author
// export let deleteBooks = (data) => ({
//   type: 'DELETE_HOME',
//   payload: axios({
//     method: 'DELETE',
//     url: `${data.ConUrl}books/${data.id}`,
//   }),
// });

/// ===============================================
// action show data books by id
export let showHome = (search, url, headers) => ({
  type: 'SHOW_DATA',
  payload: axios({
    method: 'GET',
    url: `${url}auth/user${search}`,
    headers: headers,
  }),
});
