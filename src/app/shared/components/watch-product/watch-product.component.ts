import { Component, OnInit } from '@angular/core';
import { PicturesProduct } from "@shared/interfaces/productInterface"

@Component({
  selector: 'watch-product-component',
  templateUrl: './watch-product.component.html',
  styleUrls: ['./watch-product.component.scss']
})
export class WatchProductComponent implements OnInit {

  pictures: PicturesProduct[] = [
    { miniature: "/assets/img/products/headphones/first-side.png", picture: "/assets/img/products/headphones/first-side@2x.png" },
    { miniature: "/assets/img/products/headphones/second-sice.png", picture: "/assets/img/products/headphones/second-side@2x.png" },
    { miniature: "/assets/img/products/headphones/tertiary-side.png", picture: "/assets/img/products/headphones/tertiary@2x.png" }
  ]

  activePicture: number = 0

  constructor() { }

  ngOnInit(): void {
  }

  handleActivePicture(index){
    this.activePicture = index
  }

}
