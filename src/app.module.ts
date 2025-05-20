import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CorgiModule } from './corgi/corgi.module';

@Module({
  imports: [CorgiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
