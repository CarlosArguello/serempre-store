import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'heading-component',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent implements OnInit {

  @Input() size: 'xl' | 'lg' | 'md' | 'sm' = "md"
  @Input() color: "primary" | "secondary" | "tertiary" = "primary"
  @Input() font: "medium" | "bold" = "medium"

  constructor() { }


  ngOnInit(): void {
  }

}
