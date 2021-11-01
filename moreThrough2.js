const fs = require('fs');
const through = require('through2');

process.stdin
    .pipe(toUpper())
    .pipe(process.stdout);

function toUpper() {
    return through(function (chunk, enc, cb){
        this.push(chunk.toString().toUpperCase());
        cb();
    });
}