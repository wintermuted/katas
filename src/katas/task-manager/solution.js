class TaskTrackingSystem {
  constructor() {
      this.tasks = {};
      this.taskAttributes = {};
      // TODO: Initialize dependencies and dependents data structures.
      this.dependencies = {};
      this.dependents = {};
  }

  addTask(taskId, title, description, status, priority) {
      if (taskId in this.tasks) {
          return false;
      }
      this.tasks[taskId] = true;
      this.taskAttributes[taskId] = {
          title: title,
          description: description,
          status: status,
          priority: priority
      };
      this.dependencies[taskId] = [];
      this.dependents[taskId] = [];
      
      return true;
  }

  removeTask(taskId) {
      if (taskId in this.tasks) {
          delete this.tasks[taskId];
          delete this.taskAttributes[taskId];
          // TODO: Clean up dependencies and dependents when a task is removed.
          
          delete this.dependencies[taskId];
          delete this.dependents[taskId];
      
      
          return true;
      }
      return false;
  }

  updateTask(taskId, title, description, status, priority) {
      if (!(taskId in this.tasks)) {
          return false;
      }
      if (title !== undefined) this.taskAttributes[taskId].title = title;
      if (description !== undefined) this.taskAttributes[taskId].description = description;
      if (status !== undefined) this.taskAttributes[taskId].status = status;
      if (priority !== undefined) this.taskAttributes[taskId].priority = priority;

      // TODO: Automatically update the status of dependent tasks if all dependencies are closed.
      
      const taskIsClosed = this.taskAttributes[taskId].status === 'Closed'
      
      console.log('taskIsClosed', taskIsClosed)
      
      if (taskIsClosed) {
          const dependentTasks = this.dependents[taskId];
          const dependentTaskStatus = dependentTasks.map(item => {
              return this.taskAttributes[item].status 
          });
          console.log('dependentTasks', dependentTasks)
          console.log('dependentTaskStatus', dependentTaskStatus)
          const allClosed = dependentTaskStatus.every(item => item === 'Closed');
          
          console.log('allClosed', allClosed)
          
          if (allClosed) {
              dependentTasks.forEach(item => {
                  return this.taskAttributes[item].status = 'Open'
              })
          }
      }

      return true;
  }

  getTasksByStatus(status) {
      return Object.keys(this.taskAttributes)
          .filter(taskId => this.taskAttributes[taskId].status === status)
          .sort();
  }

  getTasksByPriority(priority) {
      return Object.keys(this.taskAttributes)
          .filter(taskId => this.taskAttributes[taskId].priority === priority)
          .sort();
  }

  // TODO: Implement addDependency method.
  addDependency(taskId, dependencyTaskId) {
      if (this.tasks[taskId] && this.tasks[dependencyTaskId]) {
          const hasDependency = this.dependents[taskId].includes(dependencyTaskId)
          
          if (!hasDependency) {
              this.dependencies[taskId].push(dependencyTaskId);
              this.dependents[dependencyTaskId].push(taskId)
              return true;
          }
      }
      
      return false;
  }
  // TODO: Implement removeDependency method.
  removeDependency(taskId, dependencyTaskId) {
      if (this.tasks[taskId]) {
          this.tasks[taskId] = this.tasks[taskId].filter(item => item === dependencyTaskId)
          
          return true;
      }
      
      return false;
  }
  // TODO: Implement getDependentTasks method.
  getDependentTasks(taskId) {
      if (this.tasks[taskId]) {
          return this.dependents[taskId];
      }
      
      return [];
  }
}

module.exports = TaskTrackingSystem;