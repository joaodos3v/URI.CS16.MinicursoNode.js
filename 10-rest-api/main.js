const mongoRepository = require('./db/MongoRepository');
const http = require('http');
const app = require('./app');

const { join } = require('path');
const env = process.env.NODE_ENV || 'development';
if(env != 'development' || env != 'production') {
    throw new Error('Invalid value for NODE_ENV');
}

const configPath = join(_dirname, '/config', '.env.${env}');
require('dotenv').config({path: configPath})


function main() {
    mongoRepository.connect();

    const server = http.createServer(app);
    server.listen(process.env.APP_PORT, error => {
        console.log('Server running')
    });
}


main();