// src/app/users/users.controller.ts
import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('me')
  async getUser(): Promise<UserDto> { 
    return this.userService.getCurrentUser(); 
  }
}
