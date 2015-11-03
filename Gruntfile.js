var taskPath = './Gruntfile/',
    taskNames = ['browserify', 'clean', 'copy', 'ts', 'tsd'],
    tasks = [];

taskNames.forEach(function(taskName) {
    tasks.push(require(taskPath + taskName));
});

module.exports = function(grunt) {
    grunt.initConfig(tasks.reduce(function(allTasks, task) {
        var taskKey = Object.keys(task)[0];

        allTasks[taskKey] = task[taskKey];

        return allTasks;
    }));

    grunt.registerTask('default', ['clean:pre', 'tsd', 'ts', 'browserify', 'copy', 'clean:post']);
};