import { Injectable } from '@nestjs/common';
import { Corgi } from '../providers/corgi.provider';
import { Husky } from '../providers/husky.provider';

@Injectable()
export class CorgiService {
  constructor(
    private readonly corgi: Corgi,
    private readonly husky: Husky,
  ) {}

  compareDogs(): string {
    const corgiBreed = this.corgi.getBreed();
    const huskyBreed = this.husky.getBreed();
    return `Comparing breeds: ${corgiBreed} vs. ${huskyBreed}`;
  }
}
