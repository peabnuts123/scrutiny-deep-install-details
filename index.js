var request = require('request');
var cheerio = require('cheerio');
var argv = require('yargs').argv;

var packageNames = argv._;

var completedModules = 0;


packageNames.forEach(function(packageName) {
    request('https://www.npmjs.com/package/' + packageName, function (error, response, body) {
        var progressString = "(" + (++completedModules) + "/" + packageNames.length + ")";


        console.log("==================================================");

        if (error) {
            throw new Error(error);
        } else {
            if (response.statusCode === 404) {
                console.error(progressString + " " + response.statusCode + " FAILURE: Package '" + packageName + "' does not exist");
            } else if (response.statusCode !== 200) {
                console.error(response.statusCode + " FAILURE: Bad status code");
            } else {
                console.log(progressString + " " + response.statusCode + " SUCCESS ");

                var $ = cheerio.load(body);

                var $lastPublisher = $('li.last-publisher');
                var publishedBy = $lastPublisher.find('a span').text().trim();
                var publishedTime = $lastPublisher.children("span").text().trim();
                
                var $releases = $lastPublisher.next();
                var latestRelease = $releases.find('strong').text().trim();

                var $github = $releases.next();
                var githubUrl = $github.find('a').text().trim()

                var $license = $github.next();
                var licenseName = $license.find('a').text().trim();

                console.log("PACKAGE: " + packageName);
                console.log("Last published " + publishedTime + " by '" + publishedBy + "'");
                console.log("Latest Version: " + latestRelease);
                console.log("GitHub: " + githubUrl);
                console.log("License: " + licenseName);
            }
        }

        console.log("");
    });
});