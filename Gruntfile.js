module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({

    handlebars: {
      options : {
		  namespace : 'AM.Views',
      processName: function(filePath) {
      var name = filePath.replace(/^.*[\\\/]/, '');
        return name.replace('.hbs','');
      }
	   },
     all: {
       files: {
         "templates/Templates.js": ["templates/**/*.hbs"]
        }
    	}
    },

    jshint: {
      options : {
	       ignores : ['public/AM.js']
      },
      all: ['actions/**/*.js','launchers/**/*js']
    },

    concat : {
      options : {
        sourceMap :true
      },
      dev : {
        files : {
          'public/AM.js':['AM.js','templates/Templates.js','templates/helpers.js','launchers/Launcher.js','launchers/*.js', 'actions/Actions.js','actions/*.js']
        }
      }
    },

    watch: {
       handlebars :{
       		files : ["templates/**/*.hbs"],
         	tasks : ['handlebars']
      },
      testAndCombine : {
        files : ['AM.js','launchers/*.js','actions/*.js'],
        tasks: ['jshint','concat']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-handlebars');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');

  //This is to run while developing
};
