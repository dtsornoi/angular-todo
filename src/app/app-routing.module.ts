import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from './about/about.component';
import {TodoComponent} from './todo/todo.component';
import {RegisterComponent} from './register/register.component';
import {ApiTodosComponent} from './api-todos/api-todos.component';

const routes: Routes = [
  {path: '', component: RegisterComponent},
  {path: 'about', component: AboutComponent},
  {path: 'my-todos', component: TodoComponent},
  {path: 'api-todos', component: ApiTodosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
