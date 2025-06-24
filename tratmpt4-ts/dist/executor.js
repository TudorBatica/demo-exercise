"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequentialTaskExecutor = void 0;
class SequentialTaskExecutor {
    queue;
    constructor(queue) {
        this.queue = queue;
    }
    async run() {
        console.log('[EXECUTOR] Starting sequential execution...');
        while (!this.queue.isEmpty()) {
            const task = this.queue.dequeue();
            if (task) {
                try {
                    await task.execute();
                }
                catch (error) {
                    console.error(`[ERROR] Task "${task.name}" failed:`, error);
                }
            }
        }
        console.log('[EXECUTOR] All tasks have been executed.');
    }
}
exports.SequentialTaskExecutor = SequentialTaskExecutor;
