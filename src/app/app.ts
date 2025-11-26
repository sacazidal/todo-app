import { Component, inject } from '@angular/core';
import { ButtonComponent } from './components/button/button';
import { InputComponent } from './components/input/input';
import { TaskComponent } from './components/task/task';
import { TaskService } from './services/task';

@Component({
  selector: 'app-root',
  imports: [ButtonComponent, InputComponent, TaskComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  private taskService = inject(TaskService);

  protected tasks = this.taskService.tasks$;
  protected stats = this.taskService.getStats();

  protected newTaskText = '';

  addTask() {
    this.taskService.addTask(this.newTaskText);
    this.newTaskText = '';
    this.updateStats();
  }

  toggleTask(id: number) {
    this.taskService.toggleCompleted(id);
    this.updateStats();
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id);
    this.updateStats();
  }

  private updateStats() {
    this.stats = { ...this.taskService.getStats() };
  }
}
