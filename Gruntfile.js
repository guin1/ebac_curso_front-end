module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less: {
            development: {
                files : {
                    'main.css' : 'main.less'
                }
            }
        },
        replace: {
            dev: {
                options: {
                    patterns: [ 
                        {
                            match: 'ENDERECO_DO_JS',
                            replacement: '../src/scripts/main.js'
                        }
                    ]
                }
            }
        },
        files: [
            {
                expand: true,
                flatten: true,
                src: ['../src/index.html']
            }
        ],

        uglify: {
            target: {
                files: {
                    'dist/scripts/main.min.js': 'src/scripts/main.js'
                }
            }
        }
      
    })


 grunt.loadNpmTasks('grunt-contrib-less');
 grunt.loadNpmTasks('grunt-contrib-uglify');

 grunt.registerTask('default', ['less', 'uglify']);
}