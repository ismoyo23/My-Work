import axios from 'axios';

// ==============================================
// action get data Author
export let getSkill = (search, url, headers) => ({
  type: 'SKILL_DATA',
  payload: axios({
    method: 'GET',
    url: `${url}skill${search}`,
    headers: headers,
  }),
});

// ==============================================
// action Add data Author
export let addData = (data) => ({
  type: 'SKILL_DATA',
  payload: axios({
    method: data.Method,
    url: data.ConUrl,
    data: {
      name_author: data.name_author,
      profile_author: data.profile_author,
    },
  }),
});

// ===============================================
// action delete data author
export let removeData = (data) => ({
  type: 'SKILL_DATA',
  payload: axios({
    method: 'DELETE',
    url: `${data.ConUrl}books/author/${data.id}`,
  }),
});
