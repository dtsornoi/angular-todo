import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  newTask: string;
  @Output() addTodo: EventEmitter<string> = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }

}
