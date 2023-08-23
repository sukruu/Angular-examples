import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FoodPlate } from '../models/food-plate';
@Injectable({
  providedIn: 'root',
})
export class RestaurantService {
  url: string = '/assets/data/dummy-food.json';
  constructor(private http: HttpClient) {}

  getFoodPlates(restId: number): Observable<FoodPlate[]> {
    return this.http.get<FoodPlate[]>(this.url);
  }

  getCategoryQuantity(plates: FoodPlate[]) {
    var qty: any = {};

    if (plates.length == 0) {
      return [];
    }

    console.log(plates);

    for (let i = 0; i < plates.length; i++) {
      qty = {
        ...qty,
        [plates[i].categoryId]: (qty[plates[i].categoryId] ?? 0) + 1,
      };
    }
    return qty;
  }
}
