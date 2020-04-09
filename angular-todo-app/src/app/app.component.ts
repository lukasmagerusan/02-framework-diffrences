import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '🅰 angular-todo-app';
  todoTitle: string = '';
  beforeEditCache: string = '';
  todos: Todo[] = [
    {
      id: 1,
      title: 'Aufgabe1',
      completed: false,
      editing: false,
    },
    {
      id: 2,
      title: 'Aufgabe2',
      completed: false,
      editing: false,
    },
    {
      id: 3,
      title: 'Aufgabe3',
      completed: false,
      editing: false,
    },
  ];

  addTodo(): void {
    if (this.todoTitle !== '') {
      this.todos.push({
        id: this.todos.length + 1,
        title: this.todoTitle,
        completed: false,
        editing: false,
      });
    }
    this.todoTitle = '';
  }

  deleteTodo(id: number): void {
    this.todos = this.todos.filter((todo) => todo.id != id);
  }

  editTodo(todo: Todo): void {
    this.beforeEditCache = todo.title;
    todo.editing = true;
  }

  doneEditing(todo: Todo): void {
    if (todo.title === '') {
      todo.title = this.beforeEditCache;
    }
    todo.editing = false;
  }
  cancelEditing(todo: Todo): void {
    todo.title = this.beforeEditCache;
    todo.editing = false;
  }

  remaining(): number {
    return this.todos.filter((todo) => !todo.completed).length;
  }

  atLeastOneCompleted(): boolean {
    return this.todos.filter((todo) => todo.completed).length > 0;
  }

  clearCompleted(): void {
    this.todos = this.todos.filter((todo) => !todo.completed);
  }
  checkAll(): void {
    this.todos.forEach(
      (todo) => (todo.completed = (<HTMLInputElement>event.target).checked)
    );
  }
}

interface Todo {
  id: number;
  title: string;
  completed: boolean;
  editing: boolean;
}
