const { task, src, dest,parallel } = require('gulp');
const babel = require('gulp-babel');
const {resolve} = require('path');
const chalk = require('chalk');
const taskPath = require('./config/task');

taskPath.forEach(path=>{
  require(path)();
})