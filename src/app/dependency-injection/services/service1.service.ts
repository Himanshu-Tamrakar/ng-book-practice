import { Injectable } from '@angular/core';
import { Service2Service } from './service2.service';

interface Matric {
  record(): void;
}

@Injectable()
export class Service1Service {

  constructor(_service2: Service2Service) { 
    console.log('26-4', _service2);
  }
}
