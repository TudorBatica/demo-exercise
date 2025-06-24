import { TaskQueue } from './queue';

export class SequentialTaskExecutor {
  constructor(private queue: TaskQueue) {}

  public async run(): Promise<void> {
    console.log('[EXECUTOR] Starting sequential execution...');
    while (!this.queue.isEmpty()) {
      const task = this.queue.dequeue();
      if (task) {
        try {
          await task.execute();
        } catch (error) {
          console.error(`[ERROR] Task "${task.name}" failed:`, error);
        }
      }
    }
    console.log('[EXECUTOR] All tasks have been executed.');
  }
}
