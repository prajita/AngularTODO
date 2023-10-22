import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  
  todos: Todo[] | undefined;
  constructor() {
    this.todos = [
      {
        serial: 1,
        title: "wake up at 7",
        desc: "wake up at 7, feshen up",
        active: true
      },
      {
        serial: 2,
        title: "make breakfast",
        desc: "check fruits and veggies, make juice and breakfast",
        active: true
      },
      {
        serial: 3,
        title: "drink water",
        desc: "drink green tea with lime and 3 glass of water",
        active: true
      },
      {
        serial: 4,
        title: "follow up yesterday's work",
        desc: "check prev day's prpgress",
        active: false
      },
      {
        serial: 5,
        title: "start today's assignments at 10",
        desc: "happy coding",
        active: false
      },
      {
        serial: 6,
        title: "make lunch",
        desc: "take a bath ,happy food!",
        active: true
      },
      {
        serial: 7,
        title: "back to code",
        desc: "code code code review code code code",
        active: true
      },
      {
        serial: 8,
        title: "time for dinner",
        desc: "happy soup!",
        active: true
      },
      {
        serial: 9,
        title: "time for chitchat",
        desc: "start washing machine take a break",
        active: true
      },
      {
        serial: 10,
        title: "brisk walk",
        desc: "have a long walk and go to sleep",
        active: true
      },
      {
        serial: 11,
        title: "good night",
        desc: "set alarm n go to sleep",
        active: true
      }
    ]
  }
  ngOnInit(): void {

  }
}
