/* global module: true */
module.exports = function (grunt) {
  grunt.initConfig({
    htmlmin: {
      options: {
        collapseWhitespace: true,
      },
      files: {
        src: './index.html',
        dest: 'dist/index.html'
      }
    },
    cssmin: {
      'dist/register.css': 'register.css'
    },
    uglify: {
      'dist/register.js': 'register.js'
           
    }
    
 });

  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask("minify", [ 'htmlmin','cssmin', 'uglify']);

  grunt.registerTask("release", ['copy', 'htmlmin','cssmin', 'uglify']);
};

