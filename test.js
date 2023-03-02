const { Octokit } = require('octokit');
const octokit = new Octokit({
  auth: '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',
});

const owner = 'Nicolo51';
const repo = 'IpFixe';
const path = 'test.txt';
const message = 'Create new file';
const content = Buffer.from('Hello, world!').toString('base64');


octokit.repos.createOrUpdateFile({
  owner,
  repo,
  path,
  message,
  content,
}).then(response => {
  console.log(response.data);
}).catch(error => {
  console.error(error);
});