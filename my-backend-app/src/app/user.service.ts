// src/app/users/user.service.ts
import { Injectable } from '@nestjs/common';
import { UserDto } from './user.dto'; 

@Injectable()
export class UserService {
  getCurrentUser(): UserDto {
    // Example: Hardcoded user data (for testing purposes)
    const user: UserDto = { 
      id: 1, 
      username: 'testUser', 
      email: 'test@example.com', 
      firstName: 'Test', 
      lastName: 'User' 
    }; 

    return user; 
  }
}