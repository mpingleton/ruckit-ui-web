
const getUsersInMyBase = async (apiContext) => {
  const res = await fetch(apiContext.apiAddr + '/api/user/in/base/my', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${apiContext.accessToken}`,
    },
  }).then((data) => data.json());

  return res;
};

const getMe = async (apiContext) => {
  const res = await fetch(apiContext.apiAddr + '/api/user/me', {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${apiContext.accessToken}`,
    },
  }).then((data) => data.json());

  return res;
};

module.exports = {
  getUsersInMyBase,
  getMe,
};
