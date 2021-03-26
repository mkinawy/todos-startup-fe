import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-uncompleted-todos',
  templateUrl: './uncompleted-todos.component.html',
  styleUrls: ['./uncompleted-todos.component.scss'],
})
export class UncompletedTodosComponent implements OnInit {
  todos: Observable<Todo[]> | undefined;

  selectedTodo: Todo | undefined;

  newTodo: string = '';

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.loadTodos();
  }

  onTodoSelect() {
    if (!this.selectedTodo) return;
  }

  onComplete() {
    if (!this.selectedTodo) return;
    this.todosService.completeTodo(this.selectedTodo.id).subscribe(() => {
      this.loadTodos();
    });
  }

  onAdd() {
    if (!this.newTodo) return;
    const myNewTodo: Todo = {
      id: 0,
      text: this.newTodo,
      completed: false,
    };
    this.todosService.addTodo(myNewTodo).subscribe(() => {
      this.loadTodos();
    });
  }

  private loadTodos() {
    this.todos = this.todosService.getUncompletedTodos();
    this.selectedTodo = undefined;
    this.newTodo = '';
  }
}
