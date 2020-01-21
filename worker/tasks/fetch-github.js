const fetch = require('node-fetch');
const baseURL = 'https://jobs.github.com/positions.json'

async function fetchGitHub() {
    let resultCount = 1;
    let onPage = 0;
    const allJobs = [];
    console.log('GitHub Fetching');
    while( resultCount > 0) {
        const res = await fetch(`${baseURL}?page=${onPage}`);
        const jobs = await res.json();
        allJobs.push(...jobs);
        console.log('got: ', jobs.length, ' jobs');
        resultCount = jobs.length;
        onPage++;
    }

    console.log('got ', allJobs.length, ' total jobs')
    console.log(Date.now());
}

fetchGitHub();

module.exports = fetchGitHub;