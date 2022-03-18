const {
    src,
    dest,
    series,
    parallel,
    watch
} = require('gulp');

function task_default(cb){
    console.log("gulp ok");
    cb();
}

exports.default = task_default;



// a 任務
function task_a(cb){
    console.log("a mission");
    cb();
}
// b 任務
function task_b(cb){
    console.log("b mission");
    cb();
}

// 有順序的執行
exports.async = series(task_a,task_b);

// 同時執行任務
exports.sync = parallel(task_a,task_b);

// 把src裡的style.css搬到dist裡
function package(){
    return src('src/style.css').pipe(dest('dist'))
}

exports.p = package;



const rename = require('gulp-rename');


// ================== 壓縮打包 CSS minify=================
const cleanCSS = require('gulp-clean-css');

// src/*.css *. => 所有的css檔
// cleanCSS() 壓縮
function minicss(){
    return src('src/*.css')
    .pipe(cleanCSS())
    .pipe(rename({
        extname:'.min.css'
    }))
    .pipe(dest('dist'))
}

exports.c = minicss;


// ================= 壓縮打包js js minify check ======================
const uglify = require('gulp-uglify');

function minijs(){
    return src('src/js/*.js')
    .pipe(uglify()) //js壓縮
    .pipe(rename({
        // extname:'.min.js'
        // prefix:'web-' //增加前綴字
        // suffix:'-min' //增加後綴字
        basename:'all'  //直接更名
    }))
    .pipe(dest('dist.js'))
}

exports.ugjs = minijs;


// 整合所有檔案

const concat = require('gulp-concat');

function concatcss(){
    return src('src/*.css') //來源
    .pipe(concat('all.css')) //整合css檔
    .pipe(cleanCSS()) //壓縮(最小化)css檔
    .pipe(dest('dist/css')) //目的地
}

exports.allcss  = concatcss;


// sass

const sass = require('gulp-sass')(require('sass'));


function sassstyle() {
    return src('./src/sass/*.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(dest('./dist/css'));
}

exports.s =sassstyle;