module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),





    // sass task
    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'stylesheets/staytuned.css': 'stylesheets/staytuned.scss'
        }
      },
    }






  });

  // Load the plugin that provides the "sass" task.
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task(s).
  grunt.registerTask('default', ['sass']);

};
