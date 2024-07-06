const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");

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
            let files = fs.readdirSync(dir);

            const dirMap = {"isPosts": files.length > 0};

            files.forEach((file) => {
                const filePath = dir + '/' + file;
                const mdContent = matter.read(filePath);
                dirMap[mdContent.data.title] = mdContent.data;
            })

            const postInfo = JSON.stringify(dirMap, null, 2);

            const outputDir = path.resolve(outDir, 'resourceMap.json');

            fs.writeFileSync(outputDir, postInfo);
};