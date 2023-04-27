import 'dotenv/config'
import { SwaggerModule} from '@nestjs/swagger';
import { config } from './swangger/config'
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = <string>process.env.PORT

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentation', app, document);

  app.useGlobalPipes(new ValidationPipe())
  
  await app.listen(PORT);
  
}
bootstrap();
