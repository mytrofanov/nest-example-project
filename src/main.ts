import * as process from 'process';
import { NestFactory } from '@nestjs/core';
import { AppModule } from "./app.module";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function start() {
  const PORT = process.env.PORT || 5000;
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('This is an example of NestJS server')
    .setDescription('NestJS server REST API')
    .setVersion('1.0.0')
    .addTag('Max example')
    .build()

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('/api/docs', app, document);

  await app.listen(PORT, () => {
    console.log('Server started on port:', PORT);
  });
}

start();
