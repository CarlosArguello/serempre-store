import { Component } from '@angular/core';
import { Features } from "@shared/interfaces/productInterface"

@Component({
  selector: 'content-product-component',
  templateUrl: './contentProduct.component.html',
  styleUrls: ['./contentProduct.component.scss']
})
export class ContentProductComponent {

  selectedColor: string
  selectedTime: string
  selectedFeature: string
  specifications: Features[] = [
    { title: "Dimensions", content: "76.8 x 43.8 x 34.7 mm (earbuds and charging case)" },
    { title: "USB Standard", content: "USB-C" },
    { title: "Power supply", content: "Sennheiser 7mm dynamic driver" },
    { title: "Frequency response (Microphone)", content: "100 Hz to 10 kHz" },
    { title: "Frequency response", content: "5 - 21,000 Hz" },
    { title: "Noise cancellation", content: "Single-Mic ANC per earbud side" },
  ]

  tabs: string[] = ["Overview", "Features", "What's in the box?"]
  contentTabs: string[] = ["For the past 75 years, Sennheiser has put sound first. The new MOMENTUM True Wireless 2 is no different. Thanks to leading audio technology and innovation, these new earbuds deliver the best listening experience anytime, anywhere. With improved ergonomics designed for full day wearing and refined touch controls for a more personalised experience, they have been finely crafted for the most discerning listener and aim to simplify your life by enhancing your everyday.", "other tab", "other tab2"]

  constructor() {
  }

  changeSelectedColor(value){
    this.selectedColor = value
  }

  changeSelectedTime(value){
    this.selectedTime = value
  }

  changeSelectedFeature(value){
    this.selectedFeature = value
  }

}
