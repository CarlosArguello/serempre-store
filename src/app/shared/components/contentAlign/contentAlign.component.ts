import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'content-align-component',
  templateUrl: './contentAlign.component.html',
  styleUrls: ['./contentAlign.component.scss']
})
export class ContentAlignComponent implements OnInit {

  @Input() align: "vertical" | "horizontal" = "vertical";
  @Input() incrementSpace: boolean | undefined = undefined;
  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
