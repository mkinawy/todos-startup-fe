import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo.model';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  todos: Observable<Todo[]> | undefined;

  selectedTodo: Todo | undefined;

  newTodo: string = '';

  constructor(private todosService: TodosService) {}

  ngOnInit(): void {
    this.loadTodos();
  }

  onTodoSelect() {
    if (!this.selectedTodo) return;
    console.log(this.selectedTodo);
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
    this.todos = this.todosService.getAllTodos();
    this.selectedTodo = undefined;
    this.newTodo = '';
  }
}
