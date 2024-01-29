import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './user-home/components/home/home.component';
import { LoginComponent } from './user-home/components/login/login.component';
import { RegisterComponent } from './user-home/components/register/register.component';
import { ProfileComponent } from './user-home/components/profile/profile.component';
import { BoardUserComponent } from './user-home/components/board-user/board-user.component';
import { BoardRestaurantOwnerComponent } from './user-home/components/board-restaurant-owner/board-restaurant-owner.component';
import { BoardAdminComponent } from './user-home/components/board-admin/board-admin.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardRestaurantOwnerComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
