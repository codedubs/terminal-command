const fs = require('fs')

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file} `;
    }, '');

    console.log(filesToString);
  });
};

module.exports.touch = () => {
  fs.writeFile('message.txt', data, (err) => {
    if (err) throw err;
    console.log('Saved!');
  })
};

module.exports.mkdir = () => {
  fs.mkdir('tmp/a/apple', (err) => {
    if (err) throw err;
  })
};
