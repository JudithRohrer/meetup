'use strict';

const axios = require('axios');

module.exports.getAccessToken = async (event) => {

  const MEETUP_OAUTH_URL = 'https://secure.meetup.com/oauth2/access'
    + '?client_id=unmfj4cn58bom36ulhs1r8ea8c'
    + '&client_secret=uaqmj9ifo3cr4d174tniku1pvj'
    + '&grant_type=authorization_code'
    + '&redirect_uri=https://judithrohrer.github.io/meetup/'
    + '&code=' + event.pathParameters.code;

  const info = await axios.post(MEETUP_OAUTH_URL);

  return {
    statusCode: 200,
    body: JSON.stringify({
      access_token: info.data.access_token,
      refresh_token: info.data.refresh_token,
    }),
  };
};
