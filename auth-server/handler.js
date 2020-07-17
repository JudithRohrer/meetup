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
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      access_token: info.data.access_token,
      refresh_token: info.data.refresh_token,
    }),
  };
};

module.exports.getRefreshAccessToken = async (event) => {

  const MEETUP_OAUTH_URL = 'https://secure.meetup.com/oauth2/access'
    + '?client_id=unmfj4cn58bom36ulhs1r8ea8c'
    + '&client_secret=uaqmj9ifo3cr4d174tniku1pvj'
    + '&grant_type=refresh_token'
    + '&redirect_uri=https://judithrohrer.github.io/meetup/'
    + '&refresh_token=' + event.pathParameters.refresh_token;

  const info = await axios.post(MEETUP_OAUTH_URL);

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    body: JSON.stringify({
      access_token: info.data.access_token,
      refresh_token: info.data.refresh_token,
    }),
  };
};

// User authorization_code
// https://secure.meetup.com/oauth2/authorize?client_id=unmfj4cn58bom36ulhs1r8ea8c&response_type=code&redirect_uri=https://judithrohrer.github.io/meetup/
