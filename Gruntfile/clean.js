var grunt = require('grunt');

function clean() {
    grunt.loadNpmTasks('grunt-contrib-clean');

    return {
        clean: {
            pre: ['tmp', 'build'],
            post: ['tmp']
        }
    }
}

module.exports = clean();