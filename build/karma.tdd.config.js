
const base = {
    frameworks: ['mocha', 'expect', 'expect-maptalks', 'sinon', 'happen'],
    basePath: '..',
    files: [
        'dist/maptalks.js',
        'test/core/ClassSpec.js',
        'test/**/*.js',
        {
            pattern: 'assets/css/**/*.css',
            included: false
        }, {
            pattern: 'assets/images/**/*.png',
            included: false
        }, {
            pattern: 'test/resources/*',
            included: false
        }
    ],
    proxies: {
        '/images/': '/base/assets/images/',
        '/css/': '/base/assets/css/',
        '/lib/': '/base/assets/lib/',
        '/resources/': '/base/test/resources/'
    },
    preprocessors: {
        'test/core/ClassSpec.js': ['babel']
    },
    customLaunchers: {
        IE10: {
            base: 'IE',
            'x-ua-compatible': 'IE=EmulateIE10'
        },
        IE9: {
            base: 'IE',
            'x-ua-compatible': 'IE=EmulateIE9'
        }
    }
};


module.exports = function (config) {
    config.set(Object.assign(base, {
        browsers: ['Chrome'],
        reporters: ['mocha']
    }));
};
