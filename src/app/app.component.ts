import { Component } from '@angular/core';
import { repeat } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
  constructor(){
    setTimeout(()=>{
      this.title = 'prajitas-todo-list';
    }, 2000);
  }
}