import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../models/task';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.html',
  styleUrl: './task.scss',
})
export class TaskComponent {
  @Input() task!: Task;

  @Output() toggle = new EventEmitter<number>();
  @Output() delete = new EventEmitter<number>();

  toggleClick(id: number) {
    this.toggle.emit(id);
  }

  deleteClick(id: number) {
    this.delete.emit(id);
  }
}
