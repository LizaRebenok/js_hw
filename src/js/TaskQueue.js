class TaskQueue {
  constructor(delay) {
    this.delayTime = delay;
    this.tasks = [];
    this.queueRunning = false;
  }

  delay(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  addTask(task) {
    this.tasks.push(task);
  }

  run() {
    if (this.queueRunning) {
      return Promise.reject('Черга вже виконується.');
    }

    this.queueRunning = true;
    let promise = Promise.resolve();

    promise = this.tasks.reduce((acc, task) => acc
      .then(() => task())
      .then((result) => {
        console.log(result);
        return this.delay(this.delayTime);
      })
      .catch((error) => {
        console.error('Помилка при виконанні завдання.', error);
        return this.delay(this.delayTime);
      }), promise);

    return promise
      .then(() => 'Всі завдання виконані.')
      .catch((error) => {
        console.log('Помилка', error);
      });
  }
}

export default TaskQueue;
