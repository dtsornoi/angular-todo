import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-todos',
  templateUrl: './api-todos.component.html',
  styleUrls: ['./api-todos.component.css']
})
export class ApiTodosComponent implements OnInit {
  todos:[] = [];
  constructor() { }

  ngOnInit(): void {
    fetch('https://jsonplaceholder.typicode.com/todos/')
      .then((response) => response.json()
        .then((json) => this.todos = json
      )
    )
  }

}
