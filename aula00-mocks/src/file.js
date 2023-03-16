const { readFile } = require('fs/promises');
const DEFAULT_OPTION = {
  maxLines: 3,
  fields: ['id', 'name', 'profession', 'age'],
};

class File {
  static async csvToJSON(filePath) {
    const content = await readFile(filePath, 'utf8');
    const validation = this.isValid(content);

    if (!validation.valid) throw new Error(validation.error);
  }

  static isValid(csvString, options = DEFAULT_OPTION) {
    //para ver o conteudo do arquivo
    //fs.readFileSync('./mocks/threeItems-valid.csv', 'utf8')

    //[0] = headers
    //[1] = linha 1
    //[2] = linha 2
    // ...variavel = restante do arquivo

    const [headers, ...fileWithoutHeader] = csvString.split(/\r?\n/);
    if (!fileWithoutHeader.length) {
      return {
        error: error.FILE_LENGTH_ERROR_MESSAGE,
        valid: false,
      };
    }
    console.log(headers, fileWithoutHeader);
  }
}
module.exports = File;
