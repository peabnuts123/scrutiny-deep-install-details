var request = require('request');
var cheerio = require('cheerio');
var argv = require('yargs').argv;

var packageName = argv._[0];

request('https://www.npmjs.com/package/' + packageName, function (error, response, body) {
    if (error) {
        throw new Error(error);
    } else {
        if (!response.statusCode === 200) {
            throw new Error("Bad status code: " + response.statusCode);
        } else {
            console.log("SUCCESS");

            var $ = cheerio.load(body);

            var $lastPublisher = $('li.last-publisher');
            var publishedBy = $lastPublisher.find('a span').text().trim();
            var publishedTime = $lastPublisher.children("span").text().trim();

            console.log("Package '" + packageName + "' Last published " + publishedTime + " by '" + publishedBy + "'");
        }
    }
});