module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    bower_concat: {
      all: {
        dest: 'src/build/_bower.js',
        cssDest: 'src/build/_bower.css',
        bowerOptions: {
          relative: false
        }
      }
    },
    concat: {
    basic: {
      src: ['src/jquery-2.1.4.min.js', 'src/bootstrap.min.js', 'src/build/_bower.js', 'src/backend.js'],
      dest: 'src/dist/app.js',
    },
  },
  uglify: {
    options: {
      mangle: false,
      ASCIIOnly: true,
    },
    my_target: {
      files: {
        'app/app.min.js': ['src/dist/app.js']
      }
    }
  }
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-bower-concat');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.registerTask('default', ['bower_concat', 'concat', 'uglify']);
};