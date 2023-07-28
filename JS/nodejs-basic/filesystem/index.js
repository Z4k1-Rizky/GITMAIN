const fs = require('fs');
const { resolve } = require('path');

function readFileData (error, data) {
    if (error) {
        console.log(error.message);
        return;
    }

    console.log(data);
}

fs.readFile(resolve(__dirname, "./notes.txt"), "UTF-8", readFileData);

// or

/*
const data = fs.readFileSync(resolve(__dirname, './notes.txt'), 'UTF-8');

console.log(data);
*/