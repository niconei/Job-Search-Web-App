const {promisify} = require('util');
const fetch = require('node-fetch');
const baseURL = 'https://api.linkedin.com/v1/job-search?'
var redis = require("redis"),
    client = redis.createClient();


//convert redis responses into promises
const setAsync = promisify(client.set).bind(client);


async function fetchLinkedin() {
    let resultCount = 1;
    let onPage = 0;

    //array to contain all jobs
    const allJobs = [];

    //fetch all pages
    console.log('LinkedIn Fetching');
    while( resultCount > 0) {

        const res = await fetch(`${baseURL}job-title=Web+Developer`);
        // const jobs = await res.json();
        // allJobs.push(...jobs);
        console.log(res)
        console.log('got: ', jobs.length, ' jobs');
        resultCount = jobs.length;
        onPage++;
    }

    //filter algo

    // const jrJobs = allJobs.filter(job => {
    //     const jobTitle = job.title.toLowerCase();

    //     //algo logic
    //     if (
    //         jobTitle.includes('senior') ||
    //         jobTitle.includes('manager') ||
    //         jobTitle.includes('sr.') ||
    //         jobTitle.includes('architect')
    //         ) {
    //             return false;
    //         }

    //     return true;
    // })
    console.log('got ', allJobs.length, ' total jobs')
    console.log('Jr jobs', jrJobs.length)
    console.log(Date.now());

    //Key, value
    const success = await setAsync('linkedin', JSON.stringify(jrJobs));
    console.log({success});
}

// fetchGitHub();
fetchLinkedin();
module.exports = fetchLinkedin;