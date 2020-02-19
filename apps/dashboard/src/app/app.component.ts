import { Component } from '@angular/core';
import { AuthService } from '@mdv-twenty-three/core-data';

@Component({
  selector: 'mdv-twenty-three-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'dashboard';

  links = [
    { path: '/items', icon: 'work', title: 'Items' }
  ]

  userIsAuthenticated = this.authService.isAuthenticated;
  constructor(private authService: AuthService) {}
}
