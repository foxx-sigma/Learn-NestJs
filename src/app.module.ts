import { Module } from '@nestjs/common';
import { TodosModule } from './todos/todos.module';
import { UsersModule } from './users/users.module';
import { UsersService } from './users/users.service';
import { AppService } from './app.service';
import { AppController } from './app.controller';
import { UsersController } from './users/users.controller';

@Module({
  imports: [TodosModule, UsersModule],
  controllers: [AppController, UsersController],
  providers: [AppService, UsersService],
})
export class AppModule {}
