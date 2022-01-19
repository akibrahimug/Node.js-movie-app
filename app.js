const weather = require('./weather');

const search = process.argv.slice(2);
weather.get(search)