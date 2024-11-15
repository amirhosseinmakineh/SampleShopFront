import { Component } from '@angular/core';
import { SliderComponent } from "./slider/slider.component";
import { SpacialProductComponent } from "./spacial-product/spacial-product.component";
import { NewProductComponent } from "./new-product/new-product.component";
import { FavoritProductComponent } from "./favorit-product/favorit-product.component";
import { LastedNewsComponent } from "./lasted-news/lasted-news.component";
import { BrandsComponent } from "./brands/brands.component";

@Component({
  selector: 'app-index',
  standalone: true,
  templateUrl: './index.component.html',
  styleUrl: './index.component.css',
  imports: [SliderComponent, SpacialProductComponent, NewProductComponent, FavoritProductComponent, LastedNewsComponent, BrandsComponent]
})
export class IndexComponent {

}
