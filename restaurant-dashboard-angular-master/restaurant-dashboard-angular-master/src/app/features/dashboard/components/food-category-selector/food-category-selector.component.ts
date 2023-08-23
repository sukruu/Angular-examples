import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatIconModule } from '@angular/material/icon';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { HttpClientModule } from '@angular/common/http';
import { CATEGORY_OPTIONS } from "../../../../core/constants/category-options";
import ObjectUtil from 'src/app/core/utils/object-util';

@Component({
  selector: 'app-food-category-selector',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, MatIconModule, HttpClientModule],
  providers: [MatIconRegistry, ],
  templateUrl: './food-category-selector.component.html',
  styleUrls: ['./food-category-selector.component.scss']
})
export class FoodCategorySelectorComponent {
  @Input() foodQty: { [key: number]: number } = {};
  categories = CATEGORY_OPTIONS

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon(
      "flame",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/flame_icon.svg")
    ).addSvgIcon(
      "diamond",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/diamond_icon.svg")
    ).addSvgIcon(
      "discount",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/discount_icon.svg")
    ).addSvgIcon(
      "medal",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/medal_icon.svg")
    ).addSvgIcon(
      "vegetables",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/vegetables_icon.svg")
    ).addSvgIcon(
      "wallet",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/wallet_icon.svg")
    )
  }

  getPlateQuantity(id: number): number {
    if(ObjectUtil.isEmpty(this.foodQty)) {
      return 0;
    }
    return this.foodQty[id];
  }
}
