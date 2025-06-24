export interface Task {
  name: string;
  execute: () => Promise<void>;
}

export function createTask(name: string, durationMs: number): Task {
  return {
    name,
    execute: () => {
      console.log(`[START] Executing task: ${name}`);
      return new Promise<void>((resolve) => {
        setTimeout(() => {
          console.log(`[END] Finished task: ${name} after ${durationMs}ms`);
          resolve();
        }, durationMs);
      });
    },
  };
}
