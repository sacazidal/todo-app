import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input',
  imports: [],
  templateUrl: './input.html',
  styleUrl: './input.scss',
})
export class InputComponent {
  @Input() value = '';
  @Input() textPlaceholder!: string;

  @Output() valueChange = new EventEmitter<string>();
  @Output() enter = new EventEmitter<string>();

  onInput(value: string) {
    this.valueChange.emit(value);
  }

  onEnter() {
    this.enter.emit();
  }
}
