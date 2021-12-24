
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
  getMe,
};
