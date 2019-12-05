import { Injectable } from '@angular/core';
import { ToDo } from 'src/app/interfaces/to-do';
import { TasklistService } from './tasklist.service';

@Injectable({
  providedIn: 'root'
})
export class TodolistService {
  deleteItemFromList(todos: ToDo[], todo: ToDo): ToDo[] {
    todos = todos.filter(t => t.name !== todo.name);
    this.setLocalStorageTodos(todos);
    return todos;
  }
  getTodos(): ToDo[] {
    let localStorageItem = JSON.parse(localStorage.getItem('todos'));
    return localStorageItem == null ? [] : localStorageItem.todos;
  }

  constructor(private taskListService: TasklistService) { }
  toDoTitle: string = "";

  addItems(todos: ToDo[], name: string) {
    var newTodo: ToDo = {
      name: name,
      completed: false,
      editing: false
    }
    todos.push(newTodo);
    this.taskListService.updateTaskList(name)
    this.setLocalStorageTodos(todos);
    return todos;
  }
  setLocalStorageTodos(todoList: ToDo[]): void {
    localStorage.setItem("todos", JSON.stringify({ todos: todoList }))
  }
}
