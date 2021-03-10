import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'content-tab-component',
  templateUrl: './contentTab.component.html',
  styleUrls: ['./contentTab.component.scss']
})
export class ContentTabComponent implements OnInit {

  @Input() tabs: string[]
  @Input() content: string[]

  activeTab: number = 0

  constructor() { }

  ngOnInit(): void {
  }

  handleActiveTab(index){
    this.activeTab = index
  }

}
