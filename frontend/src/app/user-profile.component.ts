import { Component, OnInit } from '@angular/core';
import { User } from './user.model'; 
import { UserService } from './user.service'; 

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: User | null = null; 
  loading = true; // Flag to track loading state
  error: string | null = null; // Store error message if any

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUser().subscribe({ 
      next: (user) => {
        this.user = user; 
        this.loading = false; 
      },
      error: (err) => {
        this.error = 'Error fetching user data: ' + err.message; 
        this.loading = false; 
      }
    });
  }
}