import { Injectable } from '@nestjs/common';
import { Dog } from '../interfaces/dog.interface';

@Injectable()
export class Corgi implements Dog {
  getBreed(): string {
    return 'Corgi';
  }
}
