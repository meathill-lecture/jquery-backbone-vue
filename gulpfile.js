/**
 * Created by realm on 2017/3/9.
 */
"use strict";

const fs = require('fs');
const gulp = require('gulp');
const del = require('del');
const sequence = require('run-sequence');
const replace = require('gulp-replace');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const marked = require('marked');
const CDN = require('./cdn.json');
const DOC = 'docs/';
const PATH_REG = /\.\/node_modules\/([\w\.\-]+)\//g;

gulp.task('clear', () => {
  return del(`${DOC}*`);
});

gulp.task('js', () => {
  return gulp.src('app/main.js')
    .pipe(replace(PATH_REG, toCDN))
    .pipe(uglify())
    .pipe(gulp.dest(`${DOC}app/`))
});

gulp.task('html', () => {
  let content = fs.readFileSync('./content.md', 'utf8');
  let pages = content.split('--------');
  pages = pages.map( page => {
    let pages = page.split('========');
    pages = pages.map( page => {
      return '<section>' + marked(page) + '</section>';
    });
    if (pages.length > 1) {
      return '<section>' + pages.join('') + '</section>';
    } else {
      return pages[0];
    }
  });
  return gulp.src('index.dev.html')
    .pipe(replace(PATH_REG, toCDN))
    .pipe(replace(/<section[\S\s]+>\s+<\/section>/, pages.join('')))
    .pipe(rename('index.html'))
    .pipe(gulp.dest(`${DOC}`));
});

gulp.task('default', taskDone => {
  sequence(
    'clear',
    ['html', 'js'],
    taskDone
  );
});

function toCDN(match, key) {
  return CDN[key];
}