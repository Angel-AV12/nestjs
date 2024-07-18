import { Module } from '@nestjs/common';
import { TaskModule } from './task/task.module';
import { ProyectModule } from './proyect/proyect.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TaskModule, ProyectModule, UsersModule, AuthModule],
})
export class AppModule {}