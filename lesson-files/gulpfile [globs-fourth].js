const { src, dest } = require('gulp');

const copyScss = () => {
    // ['dist/**/*.scss', '!dist/project/**'] — массив строк
    // в котором исключается директория dist/project и все вложенные в неё директории
    return src(['dist/**/*.scss', '!dist/project/**'])
        .pipe(dest('build/styles'));
};

exports.copy = copyScss;