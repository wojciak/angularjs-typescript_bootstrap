var grunt = require('grunt')

function browserify() {
    grunt.loadNpmTasks('grunt-browserify');

    return {
        browserify: {
            app: {
                files: {
                    'build/app/app.js': ['tmp/**/*.js']
                }
            }, options: {
                transform: ['stringify']
            }
        }
    }
}

module.exports = browserify();

