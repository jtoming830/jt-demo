import { Controller, Get, Req, Response } from '@nestjs/common';

@Controller('/')
export class AppController {
  @Get()
  get(@Req() req, @Response() response) {
    if (req.path === '/') {
      return response.redirect(`https://${req.hostname}/cv`);
    }
  }
}
