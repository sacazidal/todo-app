import { computed, Injectable, signal } from '@angular/core';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private tasks = signal<Task[]>(this.loadFromLocalStorage());

  readonly sortedTasks = computed(() => {
    return [...this.tasks()].sort((a, b) => {
      if (a.completed === b.completed) return 0;
      return a.completed ? 1 : -1;
    });
  });

  getStats() {
    const tasks = this.tasks();
    const completed = tasks.filter((t) => t.completed).length;

    return {
      total: tasks.length,
      completed,
      remaining: tasks.length - completed,
    };
  }

  addTask(text: string) {
    const trimmed = text.trim();
    if (!trimmed) return;

    const newTask: Task = {
      id: Date.now(),
      text: trimmed,
      completed: false,
      createdAt: new Date(),
    };

    this.updateTasks([...this.tasks(), newTask]);
  }

  toggleCompleted(id: number) {
    this.updateTasks(
      this.tasks().map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  }

  deleteTask(id: number) {
    this.updateTasks(this.tasks().filter((t) => t.id !== id));
  }

  private updateTasks(tasks: Task[]) {
    this.tasks.set(tasks);
    this.saveToLocalStorage(tasks);
  }

  private saveToLocalStorage(tasks: Task[] = this.tasks()) {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  private loadFromLocalStorage() {
    const saved = localStorage.getItem('tasks');
    if (!saved) return [];

    try {
      return JSON.parse(saved).map((t: Task) => ({
        ...t,
        createdAt: new Date(t.createdAt),
      }));
    } catch {
      return [];
    }
  }
}
