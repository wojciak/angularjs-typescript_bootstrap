var grunt = require('grunt');

function copy() {
    grunt.loadNpmTasks('grunt-contrib-copy');

    return {
        copy: {
            app: {
                files: [
                    {expand: true, cwd: 'app/static', src: ['**/*.*'], dest: 'build/'},
                    {expand: true, cwd: 'app/src', src: ['components/**/*.html'], dest: 'build/'}
                ]
            }
        }
    }
}

module.exports = copy();