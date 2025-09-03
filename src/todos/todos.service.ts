import { Injectable, NotFoundException } from '@nestjs/common';
import { Todo } from './todo.model';

@Injectable()
export class TodosService {
  private todos: Todo[] = [];
  private idCounter = 1;

  findAll(): Todo[] {
    return this.todos;
  }

  findOne(id: number): Todo {
    const todo = this.todos.find((t) => t.id === id);
    if (!todo)
      throw new NotFoundException(`Todo dengan id ${id} tidak ditemukan`);
    return todo;
  }

  create(title: string): Todo {
    const newTodo: Todo = {
      id: this.idCounter++,
      title,
      status: 'pending',
    };
    this.todos.push(newTodo);
    return newTodo;
  }

  update(id: number, title: string, status: 'pending' | 'done'): Todo {
    const todo = this.findOne(id);
    todo.title = title;
    todo.status = status;
    return todo;
  }

  remove(id: number): void {
    const index = this.todos.findIndex((t) => t.id === id);
    if (index === -1)
      throw new NotFoundException(`Todo dengan id ${id} tidak ditemukan`);
    this.todos.splice(index, 1);
  }
}
