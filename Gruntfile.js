/*global module:false*/
module.exports = function(grunt) {

    // Project configuration.
  grunt.initConfig({
    clean: ['dist/'],

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
          './bower_components/jsrender/jsrender.min.js',
          './bower_components/shine/dist/shine.min.js',
          './bower_components/shufflejs/dist/jquery.shuffle.min.js'
        ],
        dest: './dist/assets/javascript/dependencies.js'
      },
      shapes: {
        src: [
            "./shapes/**/*.js"
        ],
        dest: './dist/assets/shapes/index.js'
      },
      application: {
        src: [
            "./src/assets/javascript/loader.js"
        ],
        dest: './dist/assets/javascript/app.js'
      }
    },

    copy: {
        application: {
            expand: true,
            cwd: 'src/',
            src: ['**/*.html', 'assets/images/**/*'],
            dest: 'dist/'
        },
        ionicons:{
            expand: true,
            cwd: 'bower_components/Ionicons/',
            src: ['./css/*', "./fonts/*"],
            dest: './dist/lib/ionicons'
        },
        shape: {
            expand: true,
            flatten: false,
            cwd: 'shapes',
            src: ['**/*.png', '**/*.js', '**/*.shape', "**/*.md", "**/*.custom"],
            dest: './dist/assets/shapes/',
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
              "./src/assets/less/normalize.less",
              "./src/assets/less/shuffel.less",
              "./src/assets/less/main.less"
          ]
        }
      }
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
        base: 'dist',
          user: {
              name: 'Andreas Herz',
              email: 'a.herz@freegroup.de'
          }
      },
      src: ['**/*']
    },
      bump: {
          options: {
              files: ['package.json'],
              updateConfigs: [],
              commit: true,
              commitMessage: 'Release v%VERSION%  [skip ci]',
              commitFiles: ['package.json', "dist/*"],
              createTag: true,
              tagName: 'v%VERSION%',
              tagMessage: 'Version %VERSION%',
              push: true,
              pushTo: 'origin',
              gitDescribeOptions: '--tags --always --abbrev=1 --dirty=-d',
              globalReplace: true,
              prereleaseName: false,
              metadata: '',
              regExp: false
          }
      },
      gitadd: {
          shapes: {
              options: {
                  force: true
              },
              files: {
                  src: ['dist/*']
              }
          }
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
  grunt.loadNpmTasks('grunt-bump');
  grunt.loadNpmTasks('grunt-git');
  grunt.loadNpmTasks('grunt-contrib-clean');

  grunt.registerTask('generate', 'Generates JSON file with all shape files', function() {
        // List all SHAPE files in the templates directory.
        //
        var list = [];
        var shapes = grunt.file.expand({filter: "isFile", cwd: "./dist/assets/shapes"},["**/*.shape"]);
        shapes.forEach(function(shape){
            var name = shape.replace(".shape","");
            var tags = name.split("_");
            list.push({
                name:name,
                tags:tags
            });
        });
        var projectFile = "./dist/assets/shapes/index.json";
        grunt.file.write(projectFile, JSON.stringify(list, null, 2));//serialize it back to file
  });

    // Default task.
    grunt.registerTask('default', ['clean','shell', 'concat', 'less', 'copy','generate',"gitadd", 'bump']);
    grunt.registerTask('publish', ['default', 'gh-pages']);
};
