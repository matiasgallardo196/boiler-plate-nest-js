import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { IS_DEVELOPMENT, NODE_ENV, CORS_ORIGIN, PORT } from './config/env.loader';
import { Logger } from 'nestjs-pino';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    bufferLogs: true,
  });

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

  // Logger configuration
  const logger = app.get(Logger);
  app.useLogger(logger);

  // Server configuration
  await app.listen(PORT);
  logger.log(`Server is running on port ${PORT}`);
  logger.log(`Docs are running on port ${PORT}/docs`);
  logger.log(`Environment: ${NODE_ENV}`);
}

bootstrap();
