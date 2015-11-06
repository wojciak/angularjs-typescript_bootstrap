var grunt = require('grunt');

function browserify() {
    grunt.loadNpmTasks('grunt-browserify');

    return {
        browserify: {
            app: {
                files: {
                    'build/app/app.js': ['tmp/**/*.js']
                }
            }
        }
    }
}

module.exports = browserify();

