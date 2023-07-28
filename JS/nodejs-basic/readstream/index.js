const fs = require('fs');
const { resolve } = require('path');
 
const readableStream = fs.createReadStream(resolve(__dirname, './article.txt'), {
    highWaterMark: 100 // buffer number/bytes, 1 char = 1 byte
});
 
readableStream.on('readable', () => {
    try {
        process.stdout.write(`[${readableStream.read()}]`);
    } catch(error) {
        // catch the error when the chunk cannot be read.
    }
});
 
readableStream.on('end', () => {
    console.log('Done');
});