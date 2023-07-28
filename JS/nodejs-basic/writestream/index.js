const fs = require('fs');
const { resolve } = require('path');
 
const writableStream = fs.createWriteStream(resolve(__dirname,'output.txt'));

writableStream.write('Ini merupakan teks baris pertama!\n');
writableStream.write('Ini merupakan teks baris kedua!\n');
writableStream.end('Akhir dari writable stream!');