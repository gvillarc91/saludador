module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: './src/assets/scss',
          src: ['*.scss'],
          dest: './src/assets/css',
          ext: '.css'
        }]
      }
    },
    watch: {
      configFiles: {
        files: ['gruntfile.js', '*.scss'],
        tasks: ['sass'],
        options: {
          reload: true
        }
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default', ['watch']);
  grunt.registerTask('dev', ['sass', 'watch']);

};