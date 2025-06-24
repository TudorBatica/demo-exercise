# Demo Interview Exercise

## Application Overview

A command-line application that manages a queue of asynchronous tasks. The system allows users to define tasks with different properties and simulates their execution. The core of the application is a scheduler that determines the order of execution based on a set of rules.  
  
The application can create simple tasks defined by a name and a function that simulates work using `setTimeout`. These tasks are added to a single, in-memory queue.
A simple executor pulls tasks from the queue one by one in a First-In, First-Out (FIFO) order. It waits for the current task to complete its simulated execution before 
starting the next one.

## Tasks

Starting from the base application, the candidate will be asked to complete the following tasks.

### Task 1 

**Description for Candidate:**  
We need to track how long each task is expected to run. Please modify the system so that each task can be created with a specific 'duration' in milliseconds. This duration should then be used to simulate the task's execution time.

**Notes for Interviewer:**  
The candidate should find the task definition (likely an interface or type) and add a `duration: number` property. Then, they must locate the task execution logic where `setTimeout` is called and replace the hardcoded delay with the new duration property from the task object. To verify, create several tasks with different durations and check the console output to confirm they execute for the specified time.

**Assessment Focus:**  
Code comprehension, ability to navigate a small codebase, and basic TypeScript proficiency (modifying interfaces/types).

### Task 2

**Description for Candidate:**  
Our current task queue is strictly FIFO. We have a new requirement to introduce task priorities. We need to support 'low', 'medium', and 'high' priorities. The scheduler should always execute high-priority tasks before medium-priority ones, and medium-priority tasks before low-priority ones. Tasks of the same priority should still be executed in the order they were added.

**Interviewer Notes:**  
A good solution involves refactoring the single queue into a more complex data structure. This could be three separate arrays (one for each priority) or a single array that gets sorted by priority before processing. The candidate should update the Task definition to include a 'priority' property, perhaps using a string literal type ('low' | 'medium' | 'high'). The main scheduler loop must be modified to pull tasks according to the new priority rule. To verify, add a low, then a high, then a medium priority task to the queue and ensure they run in the order: high, medium, low.

**Assessment Focus:**  
Domain modeling (representing priority), data structure selection, object-oriented programming (potentially refactoring the task into a class), and algorithmic thinking.

### Task 3

**Description for Candidate:**  
Some of our tasks cannot start until another task has successfully completed. We need to add a dependency system. A task should be definable with a dependency on another task. The scheduler must ensure that a task only runs after its dependency has finished successfully.

**Interviewer Notes:**  
This requires a significant change to the scheduler. The candidate needs to modify the Task model to include an optional dependency, which could be a task ID or a direct object reference. The scheduler can no longer process a simple queue. It must now identify 'runnable' tasks (those with no dependencies or whose dependencies have completed). A good approach is to iterate through the list of pending tasks in each cycle, running only those whose dependencies are met. The candidate should consider how to track the completion status of each task. An advanced solution might model the tasks as a directed acyclic graph (DAG). Verification involves creating a task B that depends on task A, and ensuring A always completes before B begins.

**Assessment Focus:**   
Complex domain modeling (representing relationships), asynchronous flow control, advanced TypeScript usage (e.g., generics, conditional types), algorithmic design (graph traversal concepts), and error handling.
