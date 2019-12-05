import { Injectable } from '@angular/core';
import { Tasklist } from '../interfaces/tasklist';
import { Task } from '../interfaces/task';
import { ToDo } from '../interfaces/to-do';

@Injectable({
  providedIn: 'root'
})
export class TasklistService {
  i: number;
  updateTaskEditedDetails(task: Task, tasks: Task[], name: string) {
    var allTasks: Tasklist[] = this.getTaskList();
    tasks = tasks.map(item => {
      if (item.taskName == task.taskName) {
        item.taskName = task.taskName;
      }
      return item;
    });
    allTasks = allTasks.map(item => {
      if (item.name == name)
        item.tasks = tasks;
      return item;
    });
    this.setLocalStorageTasks(allTasks);
  }

  updateCompleteStatus(task: Task, tasks: Task[], name: string) {
    var allTasks: Tasklist[] = this.getTaskList();
    tasks = tasks.map(item => {
      if (item.taskName == task.taskName) {
        item.completed = task.completed;
      }
      return item;
    });
    allTasks = allTasks.map(item => {
      if (item.name == name)
        item.tasks = tasks;
      return item;
    });
    this.setLocalStorageTasks(allTasks);
  }
  addTaskToList(toDoList: Tasklist, task: string, tasklist: Tasklist[]) {
    var taskDetails: Task = {
      taskName: task,
      completed: false,
      editing: false,
    }
    toDoList.tasks.push(taskDetails);
    this.updateToDoList(toDoList, tasklist);
    return toDoList;
  }
  getStatus(toDoList: ToDo[]) {
    var allTasks: Tasklist[] = this.getTaskList();

    for (this.i = 0; this.i < toDoList.length; this.i++) {
      var toDo: Tasklist = this.getTask(allTasks, toDoList[this.i].name);
      if(toDo.tasks.length!=null)
      toDoList[this.i].total = toDo.tasks.length;
      toDoList[this.i].completedTasks = toDo.tasks.filter(t => t.completed == true).length;
    }
    return toDoList;
  }
  

  updateToDoList(toDoList: Tasklist, taskList: Tasklist[]) {
  //  taskList = taskList.filter(t => t.name !== toDoList.name);
    taskList = taskList.map(item => {
      if (item.name == name)
        item = toDoList;
      return item;
    });
   // taskList.push(toDoList);
    this.setLocalStorageTasks(taskList);
    return taskList;
  }
  deleteItemFromList(todo: Task, toDoList: Tasklist, tasklist: Tasklist[]) {
    toDoList.tasks = toDoList.tasks.filter(t => t.taskName !== todo.taskName);
    this.updateToDoList(toDoList, tasklist)
    return toDoList.tasks;
  }
  getTaskList(): Tasklist[] {
    let localStorageItem = JSON.parse(localStorage.getItem('taskList'));
    return localStorageItem == null ? [] : localStorageItem.tasks;
  }

  updateTaskList(toDoListName: string) {
    var newTodo: Tasklist = {
      name: toDoListName,
      tasks: []
    }
    this.taskList.push(newTodo);
    this.setLocalStorageTasks(this.taskList);
  }
  setLocalStorageTasks(taskList: Tasklist[]) {
    localStorage.setItem("taskList", JSON.stringify({ tasks: taskList }))
  }

  getTask(taskList: Tasklist[], name: string) {
    return taskList.filter(x => x.name == name)[0];
  }
  taskList: Tasklist[] = [];
  task: Tasklist;
  constructor() { }

}
