import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { PORT } from './config/env.loader';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { IS_DEVELOPMENT } from './config/env.loader';
import { CORS_ORIGIN } from './config/env.loader';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger configuration
  const config = new DocumentBuilder()
    .setTitle('Boiler Plate Nest JS')
    .setDescription('Boiler Plate Nest JS API')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  if (IS_DEVELOPMENT) {
    SwaggerModule.setup('docs', app, document);
  }

  // CORS configuration
  app.enableCors({
    origin: CORS_ORIGIN,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  await app.listen(PORT);
  console.log(`Server is running on port ${PORT}`);
  console.log(`Docs are running on port ${PORT}/docs`);
}

bootstrap();
