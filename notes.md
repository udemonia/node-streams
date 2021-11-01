# Notes on Streams Within Node.js

## TCP

TCP stands for Transmission Control Protocol a communications standard that enables application programs and computing devices to exchange messages over a network. It is designed to send packets across the internet and ensure the successful delivery of data and messages over networks.

## UDP

User Datagram Protocol (UDP) is a communications protocol that is primarily used to establish low-latency and loss-tolerating connections between applications on the internet. UDP speeds up transmissions by enabling the transfer of data before an agreement is provided by the receiving party.

## Protocols

-HTTPS

-HTTP

-SMTP

-IMAP

-IRC

-FTP

-SSH

-SSL - low level secure data transfer - used by HTTPS

> most of these services have a defual port - FTP is the wild card, it opens a port to start and then uses other ones to transfer data

## SMTP

Simple text based protocol similar to http; status codes, headers etc.

# Streams in Node.js

streams are a really old idea... chaining programs together with pipes - connecting programs like a garden hose

this is the way of I/O

instead of a massive monlith - you can have multiple seperate systems - each piece doing one thing well

## chunks

streams operate on data piece meal, we call those pieces of data chunks

we can operate on data, chunk by chunk

really useful for web servers, 100mb video file - maybe you don't want to read in the whole file and then write it out

you can keep small bits in memory

## readStream

in this example, we're creating a read stream and piping it to standard out - the node equivilant of cat

```javascript
const fs = require('fs');

fs.readStream('greetz.txt');
    .pipe(process.stdout)

```

## Through2 - Userland package

with through2 there are two paramaters 'write' and 'end'

both are options

`function write(buf, enc, next(){}`

`function end() {}`

call 'next()' when you're ready to receive the next chunk

if you don't call next, it'll hang - - this reminds me of middleware in express

call 'this.push(VALUE)' inside the callback to put the VALUE into the stream's output

use a 'VALUE' of 'null' to end the stream

