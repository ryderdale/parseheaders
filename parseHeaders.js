'use strict';

/* eslint-env node */

function parseHeaders(text) {
    const lines = text.split('\n');
    const first = lines.shift();
    const [version, code] = first.split(' ');
    const obj = {
        version,
        code,
        headers: {}
    };

    let done = false;
    while (!done) {
        const line = lines.shift();
        const [key, value] = line.split(': ');
        if (key) {
            obj.headers[key] = value;
        }
        else {
            done = true;
        }
    }

    obj.body = lines.join('\n');

    return obj;
}

module.exports = parseHeaders;
