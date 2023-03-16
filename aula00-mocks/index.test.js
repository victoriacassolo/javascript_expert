const { error } = require('./src/constants');
const File = require('./src/file');
const assert = require('assert');

//IFEE
(async () => {
  //variaveis criadas nesse bloco so sao validas durante a execucao
  {
    const filePath = './mocks/emptyFile-invalid.csv';
    const expected = new Error(error.FILE_LENGTH_ERROR_MESSAGE);
    const result = File.csvToJSON(filePath);
    await assert.rejects(result, expected);
  }
})();
