var grunt = require('grunt');

function tsd() {
    grunt.loadNpmTasks('grunt-tsd');

    return {
        tsd: {
            refresh: {
                options: {
                    command: 'reinstall',
                    latest: true,
                    config: 'tsd.json',
                    opts: {}
                }
            }
        }
    }
}

module.exports = tsd();