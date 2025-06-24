"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const task_1 = require("./task");
const queue_1 = require("./queue");
const executor_1 = require("./executor");
async function main() {
    console.log('--- Asynchronous Task Queue Application ---');
    const taskQueue = new queue_1.TaskQueue();
    const executor = new executor_1.SequentialTaskExecutor(taskQueue);
    console.log('\nCreating and queuing tasks...');
    taskQueue.enqueue((0, task_1.createTask)('Download report', 1500));
    taskQueue.enqueue((0, task_1.createTask)('Process user data', 1000));
    taskQueue.enqueue((0, task_1.createTask)('Send notifications', 500));
    taskQueue.enqueue((0, task_1.createTask)('Archive old logs', 2000));
    console.log('\nAll tasks queued.');
    await executor.run();
    console.log('\n--- Application finished ---');
}
main();
