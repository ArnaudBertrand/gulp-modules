var through = require('through2');
var jsbeautify = require('js-beautify').js_beautify;
var PluginError  = require('gulp-util').PluginError;

module.exports = function (type, name){
  var edit = function(content){
    var json = JSON.parse(content);
    switch(type){
      case 'panel': json = json.PAGE.PANELS[name]; break;
    }
    return JSON.stringify(json);
  };

  return through.obj(function (file, enc, cb) {
    try{
      var json = edit(file.contents.toString('utf8'));
      file.contents = new Buffer(jsbeautify(json));
    } catch (err) {
      this.emit('error', new PluginError('csdparser', err));
    }

    this.push(file);
    cb();
  })
};
