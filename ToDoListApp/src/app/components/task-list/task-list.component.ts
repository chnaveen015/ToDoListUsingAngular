import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { TasklistService } from 'src/app/services/tasklist.service';
import { Tasklist } from 'src/app/interfaces/tasklist';
import { Task } from 'src/app/interfaces/task';
import { ToDo } from 'src/app/interfaces/to-do';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasklist: Tasklist[] = [];
  toDoName: ToDo;
  completedTasks: number;
  total: number;
  name: string
  task: string;
  toDoList: Tasklist;

  constructor(
    private router: Router,
    private taskListService: TasklistService
  ) {
    let localStorageItem = JSON.parse(localStorage.getItem('name'));
    this.name = localStorageItem == null ? [] : localStorageItem.todo.name;
    this.completedTasks = localStorageItem == null ? [] : localStorageItem.todo.completedTasks;
    this.total = localStorageItem == null ? [] : localStorageItem.todo.total;
    this.tasklist = taskListService.getTaskList();
    this.toDoList = taskListService.getTask(this.tasklist, this.name);
  }
   ngOnInit() {
  }
  addTask() {

    this.toDoList = this.taskListService.addTaskToList(this.toDoList, this.task, this.tasklist)
    this.task = ''
  }
  editTodo(task: Task, tasks: Task[]): void {
    task.editing = !task.editing;
    this.taskListService.updateTaskEditedDetails(task, tasks, this.name);
  }
  taskCompleted(task: Task, tasks: Task[]) {
    task.completed = !task.completed;
    this.taskListService.updateCompleteStatus(task, tasks, this.name);
  }
  deleteItem(todo: Task) {
    this.toDoList.tasks = this.taskListService.deleteItemFromList(todo, this.toDoList, this.tasklist);
  }
}
