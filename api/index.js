const express = require('express')
const app = express()
const port = 3001

//redis
var redis = require("redis"),
    client = redis.createClient();

//convert redis responses into promises
const {promisify} = require('util');
const getAsync = promisify(client.get).bind(client);


app.get('/jobs', async (req, res) => {

    const jobs = await getAsync('github');

    /*To test
    run node index.JSON
    on additional terminal
    type : curl http://localhost:3001/jobs
    see console output on terminal window running node
    */
    // console.log(JSON.parse(jobs).length);

    //add header to allow external conections
    //access control express
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
    return res.send(jobs)
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))