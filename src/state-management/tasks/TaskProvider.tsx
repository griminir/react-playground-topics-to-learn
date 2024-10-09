import { ReactNode, useReducer } from 'react';
import TasksContext from './tasksContext';

export interface Task {
  id: number;
  user: string;
  title: string;
}

interface AddTask {
  type: 'ADD_TASK';
  task: Task;
}

interface DeleteTask {
  type: 'DELETE_TASK';
  taskId: number;
}

export type TaskAction = AddTask | DeleteTask;

const taskReducer = (state: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case 'ADD_TASK':
      return [action.task, ...state];
    case 'DELETE_TASK':
      return state.filter((task) => task.id !== action.taskId);
    default:
      return state;
  }
};


interface Props {
  children: ReactNode;
}

const TaskProvider = ({ children }: Props) => {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TasksContext.Provider>
  );
};

export default TaskProvider;
