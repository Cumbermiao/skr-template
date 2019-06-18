const { task, src, dest } = require('gulp');
const babel = require('gulp-babel');
const {resolve} = require('path');

const transformJs = function(cb){
  let filepath=resolve(__dirname,'../src/app.js');
  let dist=resolve(__dirname,'../dist');
  src(filepath).pipe(babel()).pipe(dest(dist));
  cb();
}

module.exports = function(){
  task(transformJs);
  task.displayName = 'babel';
  task.description = 'transform js with babel';
}