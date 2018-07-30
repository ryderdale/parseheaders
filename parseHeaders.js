'use strict';

/* eslint-env node */

function parseHeaders(string) {
    let stringArr = string.split("\n");
    const [version, code] = stringArr.shift().split(' ');
    const returnObject = {version, code, headers: {}};
    while (stringArr.length > 0) {
        let intraArray = stringArr.shift().split(': ', 2);
        if(intraArray.length !== 2) {
            break;
        }
        returnObject['headers'][intraArray[0]] = intraArray[1];
    }
    returnObject.body = stringArr.join()
    console.log(returnObject);
    return returnObject;
};

module.exports = parseHeaders;
