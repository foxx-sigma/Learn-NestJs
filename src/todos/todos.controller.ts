import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import type { Todo } from './todo.model';

@Controller('todos')
export class TodosController {
  constructor(private readonly todosService: TodosService) {}

  @Get()
  getAll(): Todo[] {
    return this.todosService.findAll();
  }

  @Get(':id')
  getOne(@Param('id') id: string): Todo {
    return this.todosService.findOne(+id);
  }

  @Post()
  create(@Body('title') title: string): Todo {
    return this.todosService.create(title);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body('title') title: string,
    @Body('status') status: 'pending' | 'done',
  ): Todo {
    return this.todosService.update(+id, title, status);
  }

  @Delete(':id')
  remove(@Param('id') id: string): void {
    return this.todosService.remove(+id);
  }
}
