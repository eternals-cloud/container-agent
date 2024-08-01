import { HttpStatus, Injectable } from '@nestjs/common';
import { IHeaders } from './common/common.interface';
import * as http from 'http';

@Injectable()
export class AppService {
  getHello() {
    return {
      status: HttpStatus.OK,
      message: 'Welcome 🙌 to Container Agent',
    };
  }

  getRequestIP(headers: IHeaders) {
    return {
      status: HttpStatus.OK,
      message: 'Success',
      data: headers['ip'],
    };
  }

  getDockerSocket(method: 'GET' | 'POST' | 'PATCH' | 'DELETE', path: string) {
    const socketPath: string = '/var/run/docker.sock';
    http.request({ ...options, socketPath, method }, callback);
    return {
      status: HttpStatus.OK,
      message: 'Welcome 🙌 to Container Agent',
    };
  }
}
