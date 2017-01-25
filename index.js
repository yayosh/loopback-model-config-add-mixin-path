function loopbackModelConfigAddMixinPath(filename, path) {
  var fs = require('fs');
  var json = JSON.parse(fs.readFileSync(filename));
  if(json._meta.mixins.indexOf(path) == -1) {
    json._meta.mixins.push(path);
  }
  fs.writeFile(filename, JSON.stringify(json, null, 2));
}

if(process.argv.length != 4) {
  console.log('ex: $ node index.js "./../server/model-config.json" "../node_modules/loopback-ds-timestamp-mixin"');
  process.exit(1);
}

loopbackModelConfigAddMixinPath(process.argv[2], process.argv[3]);

 
