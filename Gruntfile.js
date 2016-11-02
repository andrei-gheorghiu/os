module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        postcss: {
            options: {
                processors: [
                    require('autoprefixer')({browsers: ['> 0.01%']}),
                    require('cssnext')(),
                    require('precss')()
                ]
            },
            dist: {
                src: 'source/open.sky.css',
                dest: 'assets/css/open.sky.css'
            }

        },
        watch: {
            styles: {
                files: ['source/open.sky.css'],
                tasks: ['postcss']
            }
        },
        modernizr: {
            dist: {
                // Avoid unnecessary builds (see Caching section below)
                "cache" : true,

                // Path to the build you're using for development.
                "devFile" : false,

                // Path to save out the built file
                "dest" : "/assets/mdrnzr/modernizr.js",

                // Based on default settings on http://modernizr.com/download/
                "options" : [
                    "setClasses",
                    "addTest",
                    "html5printshiv",
                    "testProp",
                    "fnBind"
                ],

                // By default, source is uglified before saving
                "uglify" : true,

                // Define any tests you want to explicitly include
                "tests" : [],

                // Useful for excluding any tests that this tool will match
                // e.g. you use .notification class for notification elements,
                // but don’t want the test for Notification API
                "excludeTests": [],

                // By default, will crawl your project for references to Modernizr tests
                // Set to false to disable
                "crawl" : true,

                // Set to true to pass in buffers via the "files" parameter below
                "useBuffers" : false,

                // By default, this task will crawl all *.js, *.css, *.scss files.
                "files" : {
                    "src": [
                        "*[^(g|G)runt(file)?].{js,css,scss}",
                        "**[^node_modules]/**/*.{js,css,scss}",
                        "!lib/**/*"
                    ]
                },

                // Have custom Modernizr tests? Add them here.
                "customTests" : []
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'assets/js/open.sky.js',
                dest: 'assets/js/open.sky.min.js'
            }
        }

    });

    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks("grunt-modernizr");
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    //grunt.registerTask('default', ['uglify']);
};