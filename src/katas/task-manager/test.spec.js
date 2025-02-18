const assert = require('assert');
const TaskTrackingSystem = require('./solution')

describe('TaskTrackingSystem Tests', function() {
    
    let etts;

    beforeEach(function() {
        etts = new TaskTrackingSystem();
    });

    it('should add tasks', function() {
        assert.strictEqual(etts.addTask("1", "Task 1", "Description for Task 1", "Open", 1), true);
        assert.strictEqual(etts.addTask("2", "Task 2", "Description for Task 2", "Closed", 2), true);
    });

    it('should add dependencies and get dependent tasks', function() {
        etts.addTask("1", "Task 1", "Description for Task 1", "Open", 1);
        etts.addTask("2", "Task 2", "Description for Task 2", "Closed", 2);
        assert.strictEqual(etts.addDependency("1", "2"), true);
        assert.deepStrictEqual(etts.getDependentTasks("2"), ["1"]);
    });

    it('should update tasks and get tasks by status', function() {
        etts.addTask("1", "Task 1", "Description for Task 1", "Open", 1);
        etts.addTask("2", "Task 2", "Description for Task 2", "Open", 2);
        assert.strictEqual(etts.updateTask("2", undefined, undefined, "Closed", undefined), true);
        assert.strictEqual(etts.updateTask("1", undefined, undefined, "Closed", undefined), true);
        assert.deepStrictEqual(etts.getTasksByStatus("Open"), []);
        assert.deepStrictEqual(etts.getTasksByStatus("Closed"), ["1", "2"]);
    });

    it('should remove tasks', function() {
        etts.addTask("1", "Task 1", "Description for Task 1", "Open", 1);
        etts.addTask("2", "Task 2", "Description for Task 2", "Closed", 2);
        assert.strictEqual(etts.removeTask("1"), true);
        assert.strictEqual(etts.removeTask("2"), true);
        assert.deepStrictEqual(etts.getTasksByStatus("Open"), []);
        assert.deepStrictEqual(etts.getTasksByStatus("Closed"), []);
    });

    it('should automatically open dependent task', function() {
        // Set up: Task 1 is completed, and Task 2 depends on it. Task 3 depends on Task 2. Task 2 can only open if Task 1 is closed.
        etts.addTask("1", "Task 1", "Description for Task 1", "Closed", 1);
        etts.addTask("2", "Task 2", "Description for Task 2", "Open", 2);
        etts.addTask("3", "Task 3", "Description for Task 3", "Pending", 2);
        etts.addDependency("2", "1");  // Task 2 depends on Task 1
        etts.addDependency("3", "2");  // Task 3 depends on Task 2
        // Test: Update Task 2 to 'Closed', which should allow Task 3 to automatically update to 'Open' due to dependency resolution.
        assert.strictEqual(etts.updateTask("1", undefined, undefined, "Closed", undefined), true);
        assert.strictEqual(etts.updateTask("2", undefined, undefined, "Closed", undefined), true);
        // Verify that the status of Task 3 is automatically set to 'Open' after its dependencies are closed.
        assert.deepStrictEqual(etts.getTasksByStatus("Open"), ["3"]);
    });

    it('should prevent circular dependency', function() {
        etts.addTask("1", "Task 1", "Description for Task 1", "Open", 1);
        etts.addTask("2", "Task 2", "Description for Task 2", "Closed", 2);
        assert.strictEqual(etts.addDependency("1", "2"), true);
        assert.strictEqual(etts.addDependency("2", "1"), false);  // Should prevent circular dependency
    });

    it('should remove task and clean up dependencies', function() {
        etts.addTask("1", "Task 1", "Description for Task 1", "Open", 1);
        etts.addTask("2", "Task 2", "Description for Task 2", "Closed", 2);
        etts.addDependency("1", "2");
        assert.strictEqual(etts.removeTask("2"), true);
        assert.deepStrictEqual(etts.getDependentTasks("2"), []);  // Dependencies should be cleaned up
    });

});