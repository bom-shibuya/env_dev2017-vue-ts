/**
 * ::::: DIRECTORY PATH ::::::::::::::::::::::::::::::
 */
const Path = require('path');

const DIR_BASE = {
  src: 'app/src/',
  dest: 'app/dest/'
};

const DIR = {
  src: `./${DIR_BASE.src}`,
  src$: Path.resolve(__dirname, DIR_BASE.src),
  dest: `./${DIR_BASE.dest}`,
  dest$: Path.resolve(__dirname, DIR_BASE.dest)
};

module.exports = DIR;
