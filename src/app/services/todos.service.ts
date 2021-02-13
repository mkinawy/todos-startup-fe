import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  allTodos: Todo[] = [
    { text: 'test 1', completed: false },
    { text: 'test  2', completed: false },
    { text: 'test  3', completed: false },
    { text: 'test  4', completed: false },
    { text: 'test  5', completed: false },
    { text: 'test  6', completed: false },
  ];

  constructor() {}
}
