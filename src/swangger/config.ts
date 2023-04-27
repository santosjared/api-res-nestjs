import {DocumentBuilder } from '@nestjs/swagger';

export const config = new DocumentBuilder()
.setTitle('table users')
.setDescription('the users description')
.setVersion('1.0')
.addTag('users')
.build();
