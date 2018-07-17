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
            if(extname === '.html'){
                entries[pathname] = entry
            }else if(extname ==='.js'){
                entries[basename] = entry;
            }
        })
    return entries;
}
module.exports = getView;
console.log(getView('./src/*.js'));
console.log(getView('./src/*.html'));