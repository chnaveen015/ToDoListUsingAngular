import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import { Form, FormsModule} from '@angular/forms';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TaskListComponent } from './components/task-list/task-list.component';
@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
