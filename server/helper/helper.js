const fs = require('fs');
const uuid = require('uuid/v4');

function writeJSONFile(file, content) {
    fs.writeFileSync(file, JSON.stringify(content), 'utf-8');
    console.log(`Changes saved to file ${file}`);
}

const getNewId = () => {
    return uuid();
};

module.exports = {
    writeJSONFile,
    getNewId
};
