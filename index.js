require('dotenv').config()

const server = require('./api/server');

const port = process.env.PORT || 5000;
const environment = process.env.NODE_ENV || 'development';

server.listen(port, () => {
    console.log(`**Server is running on ${environment} environment on port ${port}.**`)
})