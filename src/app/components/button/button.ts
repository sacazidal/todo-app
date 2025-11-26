import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class ButtonComponent {
  @Input() text!: string;
  @Output() add = new EventEmitter<void>();

  addTaskClick() {
    this.add.emit();
  }
}
