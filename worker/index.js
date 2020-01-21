var CronJob = require('cron').CronJob;
const fetchGitHub = require('./tasks/fetch-github');

//Fetch data from github
new CronJob('* * * * *', fetchGitHub, null, true, 'America/Los_Angeles');