import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('bootstrap');

  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  const configService = app.get(ConfigService);

  // app.enableCors({
  //   origin: configService.get('CLIENT_URL'),
  //   credentials: true,
  // });

  const config = new DocumentBuilder()
    .setTitle('Vehicle Maintenance System')
    .setDescription('Vehicle Maintenance System')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  const port = configService.get('PORT') || 3002;

  await app.listen(port, () => {
    logger.log(`Application running on port ${port}`);
  });
}

bootstrap();
