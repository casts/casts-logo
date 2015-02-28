module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dev: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'dist/css/style.css': 'src/scss/style.scss'}
            }
        },

        jade: {
            dev: {
                options: {
                    pretty:true
                },
                files: {
                    "dist/index.html": "src/index.jade"
                }
            }
        },

        watch: {
            css: {
                files: ['src/scss/*.scss', 'src/scss/mixin/*.scss', 'src/*.jade'],
                tasks: ['sass:dev', 'jade:dev'],
                options: {
                    reload: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jade');

    grunt.registerTask('default', ['sass:dist', 'jade:dev']);

};
