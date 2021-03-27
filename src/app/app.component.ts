import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'To-Do List';
  data = {
    name: 'dima'
  };
  constructor(private route: Router) {
  }

  navigateToPage(page: string) {
    this.route.navigate([page, this.data]);
  }
}
