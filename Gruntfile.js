/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    shell: {
      phantom: {
        command: 'phantomjs batch/converter.js',
        options: {
          stdout: true
        }
      }
    },

    // Task configuration
    concat: {
      options: {
      },
      libs: {
        src: [
          './bower_components/jquery/dist/jquery.min.js',
          './bower_components/modernizr/modernizr.js',
          './bower_components/shufflejs/dist/jquery.shuffle.min.js'
        ],
        dest: './dist/assets/javascript/dependencies.js'
      },
      application: {
        src: [
        ],
        dest: './dist/assets/javascript/app.js'
      },
    },

    copy: {
      application: {
        expand: true,
        cwd: 'src/',
        src: ['**/*.html', 'assets/images/**/*'],
        dest: 'dist/'
      },
      shape: {
            expand: true,
            flatten: false,
            cwd: 'shapes',
            src: ['**/*.png'],
            dest: './dist/assets/images/',
            rename: function(dest, src) {
              // transform the filePath to fileName. /org/draw2d/digital/AND.png -> draw2d_digital_AND.png
              return dest + "/"+src.replace("org/","").replace(/\//g,"_");
            }
      }

    },

    less: {
      development: {
        options: {
          compress: false
        },
        files: {
          "./dist/assets/stylesheets/main.css": [
            "./src/assets/less/main.less"
          ]
        }
      }
    },

    // configure jshint to validate js files -----------------------------------
    jshint: {
      options: {
        reporter: require('jshint-stylish') // use jshint-stylish to make our errors look and read good
      },

      // when this task is run, lint the Gruntfile and all js files in src
      build: ['Grunfile.js', 'src/**/*.js']
    },

    watch: {
      html: {
        files: [
          './src/**/*.html'
        ],
        tasks: ['copy']
      },
      js: {
        files: [
          './src/assets/javascript/**/*.js'
        ],
        tasks: ['concat:application'],
        options: {
          livereload: true
        }
      },

      less: {
        files: [
          "./src/assets/less/**/*.less"
        ],
        tasks: ['less'],
        options: {
          livereload: true
        }
      }
    },
    'gh-pages': {
      options: {
        base: 'dist'

      },
      src: ['**']
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-gh-pages');

  // Default task.
  grunt.registerTask('default', ['shell', 'jshint', 'concat', 'less', 'copy']);
  grunt.registerTask('publish', ['jshint', 'concat', 'less', 'copy', 'gh-pages']);

};
