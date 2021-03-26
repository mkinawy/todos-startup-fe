import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Todo } from '../models/todo.model';

const BASE_URL = 'https://localhost:44360/api';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  todoCompelted = new Subject();

  constructor(private http: HttpClient) {}

  getUncompletedTodos() {
    return this.http.get<Todo[]>(BASE_URL + '/todos');
  }

  getCompletedTodos() {
    return this.http.get<Todo[]>(BASE_URL + '/todos/completed');
  }

  addTodo(todo: Todo) {
    return this.http.post(BASE_URL + '/todos', todo);
  }

  completeTodo(id: number) {
    return this.http
      .post(`${BASE_URL}/todos/${id}/complete`, null)
      .pipe(tap(() => this.todoCompelted.next()));
  }
}
