const { src, dest } = require('gulp');

const copyFile = () => {
    return src('dist/scss/index.scss')
        .pipe(dest('build/styles'));
};

exports.copy = copyFile;