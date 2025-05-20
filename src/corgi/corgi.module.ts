import { Module } from '@nestjs/common';
import { CorgiController } from './corgi.controller';
import { CorgiService } from './corgi.service';

@Module({
  controllers: [CorgiController],
  providers: [CorgiService],
})
export class CorgiModule {}
