import { Controller, Get, Redirect } from '@nestjs/common';

@Controller('/')
export class AppController {
  @Get()
  @Redirect('/cv', 301)
  get() {
    return null;
  }
}
