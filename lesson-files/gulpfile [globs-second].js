const { src, dest } = require('gulp');

const copyScss = () => {
    return src('dist/sass/*.scss')
        .pipe(dest('build/styles'));
};

exports.copy = copyScss;