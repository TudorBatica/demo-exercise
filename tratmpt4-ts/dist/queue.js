"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskQueue = void 0;
class TaskQueue {
    tasks = [];
    enqueue(task) {
        this.tasks.push(task);
        console.log(`[QUEUE] Task "${task.name}" added. Queue size: ${this.tasks.length}`);
    }
    dequeue() {
        return this.tasks.shift();
    }
    isEmpty() {
        return this.tasks.length === 0;
    }
}
exports.TaskQueue = TaskQueue;
