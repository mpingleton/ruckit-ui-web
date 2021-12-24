
const login = async (apiContext, loginCredentials, setAccessToken) => {
  const res = await fetch(apiContext.apiAddr + '/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      username: loginCredentials.username,
      passphrase: loginCredentials.passphrase,
    }),
  }).then((data) => data.json());

  if (setAccessToken != undefined) {
    setAccessToken(res.accessToken);
  }

  return res;
};

const logout = async (apiContext) => {
  const res = await fetch(apiContext.apiAddr + '/api/auth/logout', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${apiContext.accessToken}`,
    },
  });

  return res;
};

module.exports = {
  login,
  logout,
};
