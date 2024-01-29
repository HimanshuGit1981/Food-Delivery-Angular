import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserHomeRoutingModule } from './user-home-routing.module';
import { UserHomeComponent } from './components/user-home.component';
import { BoardAdminComponent } from './components/board-admin/board-admin.component';
import { BoardRestaurantOwnerComponent } from './components/board-restaurant-owner/board-restaurant-owner.component';
import { BoardUserComponent } from './components/board-user/board-user.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule } from '@angular/forms';
import { RestaurantListingComponent } from '../restaurant-listing/components/restaurant-listing.component';
import { RestaurantListingModule } from '../restaurant-listing/restaurant-listing.module';

@NgModule({
  declarations: [
    UserHomeComponent,
    BoardAdminComponent,
    BoardRestaurantOwnerComponent,
    BoardUserComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
  ],
  imports: [
    CommonModule,
    UserHomeRoutingModule,
    FormsModule,
    RestaurantListingModule,
  ],
  exports: [
    UserHomeComponent,
    BoardAdminComponent,
    BoardRestaurantOwnerComponent,
    BoardUserComponent,
    HomeComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
  ],
})
export class UserHomeModule {}
