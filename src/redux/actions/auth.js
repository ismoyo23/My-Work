import axios from 'axios';

export let login = (data) => ({
  type: 'LOGIN',
  payload: axios({
    method: 'POST',
    url: `${data.url}auth/login`,
    data: {
      email: data.email,
      password: data.password,
    },
  }),
});

export let register = (data) => ({
  type: 'REGISTER',
  payload: axios({
    method: 'POST',
    url: `${data.url}auth/register`,
    data: {
      username: data.username,
      email: data.email,
      password: data.password,
      address: data.address,
      phone: data.phone,
      company: data.company,
      phone: data.phone,
      role: data.role,
    },
  }),
});

export let logout = (data) => {
  return {
    type: 'LOGOUT',
  };
};
