import 'dotenv/config'
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DB_URI),
    UsersModule
  ]
})
export class AppModule {}
