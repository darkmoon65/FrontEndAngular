// auth.service.ts
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isAuthenticated: boolean = false;
  
  constructor(private route: ActivatedRoute, private router: Router) {}

  authenticate(): void {
    const token = this.route.snapshot.queryParams['token'];

    if (token) {
      this.isAuthenticated = true;
    } else {
      this.isAuthenticated = false;
      this.router.navigate(['/unauthorized']);
    }
  }

  isAuthenticatedUser(): boolean {
    return this.isAuthenticated;
  }
}
