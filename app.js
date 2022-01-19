const weather = require('./movie');

const search = process.argv.slice(2);
weather.get(search)