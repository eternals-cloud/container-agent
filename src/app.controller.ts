import { Controller, Delete, Get, Headers, Patch, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getRequest() {
    return this.appService.getHello();
  }

  @Post()
  postRequest() {
    return this.appService.getHello();
  }

  @Patch()
  patchRequest() {
    return this.appService.getHello();
  }

  @Delete()
  deleteRequest() {
    return this.appService.getHello();
  }
}
