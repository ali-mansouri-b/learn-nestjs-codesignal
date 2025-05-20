import { Injectable } from '@nestjs/common';
import { Dog } from '../interfaces/dog.interface';

@Injectable()
export class Husky implements Dog {
  getBreed(): string {
    return 'Husky';
  }
}
