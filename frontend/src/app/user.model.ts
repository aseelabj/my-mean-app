// apps/my-frontend-app/src/app/models/user.model.ts

export interface User {
    id: number;
    username: string;
    // Add other user properties here (e.g., email, firstName, lastName)
    email?: string;
    firstName?: string;
  lastName?: string;
  }