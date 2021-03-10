import { Component, OnInit, Input } from '@angular/core';
import { Features } from "@shared/interfaces/productInterface"

@Component({
  selector: 'list-item-component',
  templateUrl: './listItem.component.html',
  styleUrls: ['./listItem.component.scss']
})
export class ListItemComponent implements OnInit {

  @Input() list: Features[]

  constructor() { }

  ngOnInit(): void {
  }

}
