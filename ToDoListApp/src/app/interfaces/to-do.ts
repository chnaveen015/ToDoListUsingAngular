export interface ToDo {
    
    name: string,
    completed: boolean,
    editing: boolean,
    total?:number,
    completedTasks?:number
  }