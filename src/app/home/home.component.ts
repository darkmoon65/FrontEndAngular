import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.authService.authenticate();
    //this.isAuthenticated = this.authService.isAuthenticatedUser();
  }

  redirectEventList () {
    this.router.navigate(['/eventList'])
  }
  redirectWaitList () {
    this.router.navigate(['/waitList'])
  }
}
