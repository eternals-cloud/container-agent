import {
  Body,
  Controller,
  Delete,
  Get,
  Headers,
  Patch,
  Post,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('*')
  async getRequest(@Headers() headers) {
    return await this.appService.getRequest(headers);
  }

  @Post('*')
  async postRequest(@Headers() headers, @Body() body) {
    return await this.appService.postRequest(headers, body);
  }

  @Patch('*')
  async patchRequest(@Headers() headers, @Body() body) {
    return await this.appService.patchRequest(headers, body);
  }

  @Delete('*')
  async deleteRequest(@Headers() headers) {
    return await this.appService.deleteRequest(headers);
  }
}
