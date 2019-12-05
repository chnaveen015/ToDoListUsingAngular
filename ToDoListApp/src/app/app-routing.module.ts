import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskListComponent } from './components/task-list/task-list.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';


const routes: Routes = [{path:'tasks',component:TaskListComponent},
{path:'',component:TodoListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
