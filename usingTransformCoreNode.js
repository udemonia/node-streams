const Transform = require('stream').Transform

const toUpper = new Transform({
    Transform(chunk, encoding, callback){
        next(null, buf.toString().toUpperCase())
    }

})

process.stdin
    .pipe(toUpper)
    .pipe(process.stdout)

