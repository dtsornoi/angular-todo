import {Component, Input, OnInit} from '@angular/core';
import {Todo} from '../model/todo.model';
import {v4 as uuid} from 'uuid';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoList: Todo[] = [];
  activeTodo = new Todo();
  constructor() { }

  ngOnInit(): void {
    this.todoList = [
      new Todo(uuid(), 'Buy milk', false, new Date()),
      new Todo(uuid(), 'Do laundry', true, new Date()),
      new Todo(uuid(), 'Walk the dog', false, new Date())
    ]
  }

  onChangeStatus(id: String):void {
    this.todoList
      .map((item: Todo) => {
      if (item.id === id){
        item.completed = !item.completed;
        return;
      }
    });
  }

  onDelete(id: string):void {
   this.todoList = this.todoList
     .filter((item: Todo)=>item.id!==id);
  }

  onAddTodo(newTodo: string): void {
    if (!newTodo || newTodo === '') return;

    let newItemId = uuid();
    let newItem = new Todo(newItemId, newTodo,false, new Date());
    this.todoList.unshift(newItem);
  }

  updateTodo() {
    this.todoList.map((item: Todo) => {
      if (item.id === this.activeTodo.id){
        item = this.activeTodo;
        this.activeTodo = new Todo();
        return;
      }
    })
  }
}
