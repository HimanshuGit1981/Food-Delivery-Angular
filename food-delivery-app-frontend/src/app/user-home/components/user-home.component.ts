import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { TokenStorageService } from '../services/token-storage.service';
import { EventBusService } from 'src/app/shared/event-bus.service';
import { LoginUserService } from 'src/app/shared/login.user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css'],
})
export class UserHomeComponent implements OnInit, OnDestroy {
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;

  eventBusSub?: Subscription;

  constructor(
    private tokenStorageService: TokenStorageService,
    private eventBusService: EventBusService,
    private loginUserService: LoginUserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;

      this.loginUserService.setLoggedInUser(user);

      this.router.navigate(['./home']);
    }

    this.eventBusSub = this.eventBusService.on('logout', () => {
      this.logout();
    });
  }

  ngOnDestroy(): void {
    if (this.eventBusSub) this.eventBusSub.unsubscribe();
  }

  logout(): void {
    this.tokenStorageService.signOut();

    this.isLoggedIn = false;
    this.roles = [];
    this.showAdminBoard = false;
    this.showModeratorBoard = false;
  }
}
