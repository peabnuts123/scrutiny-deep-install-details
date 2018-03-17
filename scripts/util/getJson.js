const stripJsonComments = require('strip-json-comments');
const { readFileSync } = require('fs');

/*
  Purpose:
    Get JSON as a JS object from a file, without caring about comments.
    
  Parameters: 
    filePath        - Path to file 
    
  Returns:
    JS object form of the JSON from file
*/
module.exports = function getJson(filePath) {
  let rawFileData = readFileSync(filePath).toString();
  let strippedJson = stripJsonComments(rawFileData);
  return JSON.parse(strippedJson);
}
