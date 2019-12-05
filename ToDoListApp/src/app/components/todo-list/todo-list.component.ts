import { Component, OnInit } from '@angular/core';
import { ToDo } from 'src/app/interfaces/to-do';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { TodolistService } from 'src/app/services/todolist.service';
import { TasklistService } from 'src/app/services/tasklist.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  name: string = "";
  todos: ToDo[]=[];
  constructor(private todoListService: TodolistService, private router: Router, private taskListService: TasklistService) {
    this.todos = todoListService.getTodos();
    if (this.todos != null) {
      this.todos = this.taskListService.getStatus(this.todos);
    }

  }
 
  add() {
    this.todos = this.todoListService.addItems(this.todos, this.name);
    this.name = '';
  }
  deleteItem(todo: ToDo) {

    this.todos = this.todoListService.deleteItemFromList(this.todos, todo);
  }

  editTodo(todo: ToDo, todos: ToDo[]): void {
    todo.editing = !todo.editing;
    this.setLocalStorageTodos(todos);
  }
  private setLocalStorageTodos(todoList: ToDo[]): void {
    localStorage.setItem("todos", JSON.stringify({ todos: todoList }))
  }
  editApply(todo) {
    this.setLocalStorageTodos(todo);
  }
  taskCompleted(todo: ToDo, todos: ToDo[]) {
    todo.completed = !todo.completed;
    this.setLocalStorageTodos(todos);
  }
  navigateToTasksList(todo: ToDo) {

    localStorage.setItem("name", JSON.stringify({ todo: todo }))
    this.router.navigate(['/tasks'])
  }

  ngOnInit() {
  }

}
