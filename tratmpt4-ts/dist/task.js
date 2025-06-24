"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTask = createTask;
function createTask(name, durationMs) {
    return {
        name,
        execute: () => {
            console.log(`[START] Executing task: ${name}`);
            return new Promise((resolve) => {
                setTimeout(() => {
                    console.log(`[END] Finished task: ${name} after ${durationMs}ms`);
                    resolve();
                }, durationMs);
            });
        },
    };
}
