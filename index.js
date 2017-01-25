function loopbackModelConfigAddMixinPath(filename, path) {
  let fs = require('fs');
  let json = JSON.parse(fs.readFileSync(filename));
  if(json._meta.mixins.indexOf(path) == -1) {
    json._meta.mixins.push(path);
  }
  fs.writeFile(filename, JSON.stringify(json, null, 2));
}

loopbackModelConfigAddMixinPath('../../server/model-config.json', '../node_modules/loopback-ds-timestamp-mixin');

