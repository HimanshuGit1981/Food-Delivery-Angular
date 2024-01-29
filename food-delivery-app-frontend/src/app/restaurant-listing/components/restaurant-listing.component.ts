import { LoginUserService } from './../../shared/login.user.service';
import { Component, TemplateRef, ViewChild } from '@angular/core';
import { RestaurantService } from '../service/restaurant.service';
import { Router } from '@angular/router';
import { Restaurant } from 'src/app/shared/models/Restaurant';
import { TokenStorageService } from 'src/app/user-home/services/token-storage.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-restaurant-listing',
  templateUrl: './restaurant-listing.component.html',
  styleUrls: ['./restaurant-listing.component.css'],
})
export class RestaurantListingComponent {
  public restaurantList: Restaurant[];
  showUserNotLoggedInDialog: boolean = false;

  dialogRef: any;

  @ViewChild('myInfoDialog') infoDialog = {} as TemplateRef<string>;

  ngOnInit() {
    this.getAllRestaurants();
  }

  constructor(
    private router: Router,
    private restaurantService: RestaurantService,
    private loginUserService: LoginUserService,
    public dialog: MatDialog
  ) {}

  getAllRestaurants() {
    this.restaurantService.getAllRestaurants().subscribe((data) => {
      this.restaurantList = data;
    });
  }
  getRandomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getRandomImage(id: number): string {
    if (id <= 8) {
      return `${id}.jpg`;
    } else {
      const imageCount = 8; // Adjust this number based on the number of images in your asset folder
      const randomIndex = this.getRandomNumber(1, imageCount);
      return `${randomIndex}.jpg`; // Replace with your image filename pattern
    }
  }

  onButtonClick(id: number) {
    if (!this.loginUserService.getLoggedInUser()) {
      this.showUserNotLoggedInDialog = true;
    } else {
      this.router.navigate(['/food-catalogue', id]);
    }
  }

  closeDialog() {
    this.showUserNotLoggedInDialog = false;
    this.router.navigate(['/']);
  }

  openInfoDialog() {
    this.dialogRef = this.dialog.open(this.infoDialog, {
      data: 'Please login to place Order!',
      height: '200px',
      width: '250px',
    });

    this.dialogRef.afterClosed().subscribe(() => {
      console.log('The Info dialog was closed.');
    });
  }
}
