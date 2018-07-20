const path = require('path');
const glob = require('glob');
// console.log(glob.sync('./src/*.js'));
function getView(globalPath){
    let files = glob.sync(globalPath);
    let entries = {},
        entry,dirname,basename,pathname,extname;
        files.forEach(item=>{
            entry = item;
            dirname = path.dirname(entry);
            extname = path.extname(entry);
            basename = path.basename(entry,extname);
            pathname = path.join(dirname,basename)
            entries[basename] = entry
        })
    return entries;
}
module.exports = getView;