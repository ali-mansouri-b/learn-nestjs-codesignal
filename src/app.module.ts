import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CorgiController } from './corgi/corgi.controller';

@Module({
  imports: [],
  controllers: [AppController, CorgiController],
  providers: [AppService],
})
export class AppModule {}
