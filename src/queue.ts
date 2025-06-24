import { Task } from './task';

export class TaskQueue {
  private tasks: Task[] = [];

  public enqueue(task: Task): void {
    this.tasks.push(task);
    console.log(`[QUEUE] Task "${task.name}" added. Queue size: ${this.tasks.length}`);
  }

  public dequeue(): Task | undefined {
    return this.tasks.shift();
  }

  public isEmpty(): boolean {
    return this.tasks.length === 0;
  }
}
