var grunt = require('grunt');

function ts() {
    grunt.loadNpmTasks('grunt-ts');

    return {
        ts: {
            app: {
                tsconfig: true
            }
        }
    }
}

module.exports = ts();