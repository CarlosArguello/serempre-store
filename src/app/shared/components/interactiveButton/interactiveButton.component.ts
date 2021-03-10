import { Component, OnInit, Input,  Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'interactive-button-component',
  templateUrl: './interactiveButton.component.html',
  styleUrls: ['./interactiveButton.component.scss']
})
export class InteractiveButtonComponent implements OnInit {

  @Output() handleButton = new EventEmitter<string>();
  @Input() activeButton: boolean = false;
  @Input() value: string;

  constructor() { }

  ngOnInit(): void {
  }

  toggleActive(){
    this.handleButton.emit(this.value)
  }

}
