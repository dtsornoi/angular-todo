import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './todo/todo.component';
import { TodoItemComponent } from './todo-item/todo-item.component';
import { AddItemComponent } from './add-item/add-item.component';
import {FormsModule} from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { RegisterComponent } from './register/register.component';
import { ApiTodosComponent } from './api-todos/api-todos.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoItemComponent,
    AddItemComponent,
    AboutComponent,
    RegisterComponent,
    ApiTodosComponent
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
