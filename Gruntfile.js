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
    }
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-shell');

  // Default task.
  grunt.registerTask('default', ['shell']);

};
