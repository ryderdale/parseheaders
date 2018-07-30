'use strict';

/* eslint-env node */

function parseHeaders(string) {
    let strArr = string.split('\n');
    let returnObj = {}
    let [version, code] = strArr.shift().split(' ');
    returnObj = {version, code};
    console.log(returnObj);
    returnObj['headers'] = {};
    while(strArr.length > 0) {
        console.log(returnObj)
        let intraArr = strArr.shift().split(': ');
        console.log(intraArr);
        if (intraArr.length !== 2) {
            break
        }
        returnObj['headers'][intraArr[0]] = intraArr[1];
    }
    returnObj.body = strArr.join();
    console.log(returnObj);
    return returnObj 
};

module.exports = parseHeaders;


    