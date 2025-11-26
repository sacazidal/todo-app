import { Component, computed, inject } from '@angular/core';
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

  protected tasks = this.taskService.sortedTasks;
  protected stats = computed(() => this.taskService.getStats());

  protected newTaskText = '';

  addTask() {
    this.taskService.addTask(this.newTaskText);
    this.newTaskText = '';
  }

  toggleTask(id: number) {
    this.taskService.toggleCompleted(id);
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id);
  }
}
