module.exports = function (grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    watch: {
      less: {
        files: ["less/*.less"],
        tasks: ["less"],
      },
    },
    postcss: {
      options: {
        map: true,
        processors: [require("autoprefixer")({ browsers: ["last 1 version"] })],
      },
      dist: {
        src: "src: css/*.css",
      },
    },
    babel: {
      options: {
        sourceMap: true,
        presets: ["@babel/preset-env"],
      },
      dist: {
        files: {
          "dist/script.js": "js/script.js",
        },
      },
    },
    less: {
      development: {
        options: {
          paths: ["less/"],
        },
        files: {
          "css/style.css": "less/source.less",
        },
      },
    },
  });
  // Load the plugin
  grunt.loadNpmTasks("grunt-postcss");
  grunt.loadNpmTasks("grunt-babel");
  grunt.loadNpmTasks("grunt-contrib-less");
  grunt.loadNpmTasks("grunt-contrib-watch");

  // Default task(s).
  // grunt.registerTask("default", ["babel"]);
};
