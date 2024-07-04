const fs = require("fs");
const path = require("path");

module.exports = function postIndexer() {
    return {
        name: 'post-indexer-plugin',
        async run() {
            if (process.env.NODE_ENV === 'development') {
                await processFileNamesToJson('src');
            }
        },
        async optimize() {
            if (process.env.NODE_ENV === 'production') {
                await processFileNamesToJson('build');
            }
        }
    }
}

async function processFileNamesToJson(outDir) {
            const dir = path.resolve('src/resources');
            const files = fs.readdirSync(dir);

            const namesAsJson = JSON.stringify(files);

            const outputDir = path.resolve(outDir, 'resourceMap.json');

            fs.writeFileSync(outputDir, namesAsJson);
};