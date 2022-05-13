const { src, dest, parallel } = require('gulp');

const copyGlobalScss = () => {
    return src('dist/sass/global.scss')
        .pipe(dest('build/styles'));
};

const copyMobileScss = () => {
    return src('dist/sass/mobile.scss')
        .pipe(dest('build/styles'));
};

const copyDesktopScss = () => {
    return src('dist/sass/desktop.scss')
        .pipe(dest('build/styles'));
};

exports.copy = parallel(copyGlobalScss, copyMobileScss, copyDesktopScss);