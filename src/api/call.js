
const getCalls = async (apiContext, status) => {
  const res = await fetch(apiContext.apiAddr + '/api/call?status=' + status, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${apiContext.accessToken}`,
    },
  }).then((data) => data.json());

  return res;
};

module.exports = {
  getCalls,
};
