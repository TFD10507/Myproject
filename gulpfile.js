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


const cleanCSS = require('gulp-clean-css');

// src/*.css *. => 所有的css檔
// cleanCSS() 壓縮
function minicss(){
    return src('src/*.css').pipe(cleanCSS()).pipe(dest('dist'))
}

exports.c = minicss;