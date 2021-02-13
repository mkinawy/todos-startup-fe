import { Component, OnInit } from '@angular/core';
import { Todo } from '../models/todo.model';
import { TodosService } from '../services/todos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  nonCompletedTodos: Todo[] = [];

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
    this.selectedTodo.completed = true;
    this.loadTodos();
  }

  onAdd() {
    if (!this.newTodo) return;
    const myNewTodo: Todo = { text: this.newTodo, completed: false };
    this.todosService.allTodos.push(myNewTodo);
    this.loadTodos();
  }

  private loadTodos() {
    this.nonCompletedTodos = this.todosService.allTodos.filter(
      (t) => !t.completed
    );
    this.selectedTodo = undefined;
    this.newTodo = '';
  }
}
