import { Component } from '@angular/core';
import { ButtonComponent } from './components/button/button';
import { InputComponent } from './components/input/input';
import { TaskComponent } from './components/task/task';

@Component({
  selector: 'app-root',
  imports: [ButtonComponent, InputComponent, TaskComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {}
