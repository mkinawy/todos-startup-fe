import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';

const BASE_URL = 'https://localhost:44360/api';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  constructor(private http: HttpClient) {}

  getAllTodos() {
    return this.http.get<Todo[]>(BASE_URL + '/todos');
  }

  addTodo(todo: Todo) {
    return this.http.post(BASE_URL + '/todos', todo);
  }

  completeTodo(id: number) {
    return this.http.post(`${BASE_URL}/todos/${id}/complete`, null);
  }
}
