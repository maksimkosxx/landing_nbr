'use strict';

module.exports = function (grunt) {

    require('time-grunt')(grunt);
    require('load-grunt-tasks')(grunt);

    //  Вся настройка находится здесь
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: ['dist/**/*'],

        sass: {
            dev: {
                options: {
                    style: 'expanded',
                    sourcemap: 'none'

                },
                files: [{
                    expand: true,
                    cwd: 'src/styles',
                    src: ['*.scss'],
                    dest: 'src/styles',
                    ext: '.css'
                }]
            },
            prod: {
                options: {
                    style: 'compressed',
                    sourcemap: 'none'

                },
                files: [{
                    expand: true,
                    cwd: 'src/styles',
                    src: ['*.scss'],
                    dest: 'dist/styles',
                    ext: '.min.css'
                }]
            }
        },
        cmq: {
            options: {
                log: false
            },
            your_target: {
                files: {
                    'dist/styles/': ['src/styles/*.css']
                }
            }
        },
        cssmin: {
            dist: {
                src: 'dist/styles/main.css',
                dest: 'dist/styles/main.min.css'
            }
        },
        concat: {
            dev: {
                src: ['src/scripts/main/*.js'],
                dest: 'src/scripts/main.js'
            },
            prod: {
                src: ['src/libs/main/*.js'],
                dest: 'src/libs/libs.js'
            }
        },
        uglify: {
            main: {
                src: ['src/scripts/*.js'],
                dest: 'dist/scripts/main.min.js'
            },
            libs: {
                src: ['src/libs/*.js'],
                dest: 'dist/libs/libs.min.js'
            }
        },
        imagemin: {
            dynamic: {
                files: [{
                    expand: true,
                    cwd: 'src/images/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'dist/images/'
                }]
            }
        },
        watch: {
            sass: {
                files: 'src/styles/**/*.scss',
                tasks: ['sass:dev']
            },
            scripts: {
                files: ['src/scripts/main/*.js', 'src/libs/main/*.js'],
                tasks: ['concat', 'jshint']
            },
            html: {
                files: [
                    'src/*.html'
                ]
            }
        },
        copy: {
            build: {
                files: [{
                    expand: true,
                    src: [
                        "src/fonts/**/*.{ttf, otf, svg, woff, woff2}",
                        "src/video/**/*"
                    ],
                    dest: "dist/"
                }]
            }
        }

    });

    grunt.registerTask('default', ['clean', 'sass:prod', 'cmq', 'cssmin',  'uglify', 'concat:prod', 'imagemin', 'copy']);


};