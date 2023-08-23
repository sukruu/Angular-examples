import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from 'src/app/core/components/navbar/navbar.component';
import { SidebarComponent } from 'src/app/core/components/sidebar/sidebar.component';
import { SidebarService } from 'src/app/core/components/sidebar/sidebar.service';
import { FoodCategorySelectorComponent } from '../../components/food-category-selector/food-category-selector.component';
import { RestaurantService } from 'src/app/core/services/restaurant.service';
import { HttpClientModule } from '@angular/common/http';
import { FoodPlate } from 'src/app/core/models/food-plate';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, SidebarComponent, NavbarComponent, FoodCategorySelectorComponent, HttpClientModule ],
  providers: [RestaurantService],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  plates: FoodPlate[] = [];
  restaurantSelected = 1;
  foodQuantity = {};

  constructor(public sidebarService: SidebarService, public restService: RestaurantService) {}
  ngOnInit(): void {
    this.restService.getFoodPlates(this.restaurantSelected).subscribe((data) => {
      this.plates = data;
      this.foodQuantity = this.restService.getCategoryQuantity(data);
    });
  }
}
