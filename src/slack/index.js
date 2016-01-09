import Slack from 'slack-api';

Slack.api.test({}, (error, data) => {
  console.log(data)
})
