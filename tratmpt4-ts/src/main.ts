import { createTask } from './task';
import { TaskQueue } from './queue';
import { SequentialTaskExecutor } from './executor';

async function main() {
  console.log('--- Asynchronous Task Queue Application ---');

  const taskQueue = new TaskQueue();
  const executor = new SequentialTaskExecutor(taskQueue);

  console.log('\nCreating and queuing tasks...');
  taskQueue.enqueue(createTask('Download report', 1500));
  taskQueue.enqueue(createTask('Process user data', 1000));
  taskQueue.enqueue(createTask('Send notifications', 500));
  taskQueue.enqueue(createTask('Archive old logs', 2000));
  console.log('\nAll tasks queued.');

  await executor.run();

  console.log('\n--- Application finished ---');
}

main();
