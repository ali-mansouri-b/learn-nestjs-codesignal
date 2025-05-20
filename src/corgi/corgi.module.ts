import { Module } from '@nestjs/common';
import { CorgiController } from './corgi.controller';
import { CorgiService } from './corgi.service';
import { Corgi } from '../providers/corgi.provider';
import { Husky } from '../providers/husky.provider';

@Module({
  controllers: [CorgiController],
  providers: [CorgiService, Corgi, Husky],
})
export class CorgiModule {}
