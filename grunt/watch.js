module.exports = {

    options: {
        spawn: false,
        livereload: true
    },

    scripts: {
        files: [
            'src/scripts/base/*.js'
        ],
        tasks: [
            'jshint'
        ]
    },

    styles: {
        files: [
            'src/styles/**/**/*.scss'
        ],
        tasks: [
            'sass:dev'
        ]
    },
    html: {
        files: [
            'src/*.html'
        ]
    }
};