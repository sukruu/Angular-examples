import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarService } from '../sidebar/sidebar.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCircleQuestion } from '@fortawesome/free-regular-svg-icons';
import { faSignIn, faShoppingCart, faBars, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { RESTAURANTS } from "../../../core/constants/restaurants";
import { Restaurant } from '../../models/restaurant';
import { FilterPipe } from 'src/app/shared/filter-pipe';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, FilterPipe],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  faQuestionCircle = faCircleQuestion;
  faSignIn = faSignIn;
  faShoppingCart = faShoppingCart;
  faBars = faBars;
  faChevronDown = faChevronDown;
  restaurants = RESTAURANTS;
  selectedRestaurant: Restaurant = this.restaurants[0];
  filterargs = {id: this.selectedRestaurant.id};
  
  constructor(
    public sidebarService: SidebarService
  ) { }

  onRestaurantSelected(rest: Restaurant) {
    console.log(rest);
    this.selectedRestaurant = rest;
    this.filterargs = {id: this.selectedRestaurant.id};
  }
}
