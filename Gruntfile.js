module.exports = function (grunt) {
    grunt.initConfig({
        autoprefixer: {
            dist: {
                files: {
                    'assets/css/open.sky.css': 'source/open.sky.css'
                }
            },
            options: {
                browsers:['> 0.01%']
            }
        },
        watch: {
            styles: {
                files: ['source/open.sky.css'],
                tasks: ['autoprefixer']
            }
        }
    });
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-watch');
};