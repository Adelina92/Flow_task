const fs = require("fs");
let stream = fs.createReadStream("./1.txt", {highWaterMark:1});

let buffer = "";

stream.on("data", data =>
{
    buffer += Number(data) + 1;
});


stream.on("end", () =>
{
    let writableStream = fs.createWriteStream("./1.txt");
    writableStream.write(buffer);
    writableStream.end();
});