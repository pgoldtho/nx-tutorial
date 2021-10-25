import { Component, Input } from '@angular/core';
import { Todo } from '@myorg/data';

@Component({
  selector: 'myorg-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input() todos!: Todo[];

  // constructor() { }

  // ngOnInit(): void {
  // }

}
