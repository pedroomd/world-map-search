import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-zoom-buttons',
  templateUrl: './zoom-buttons.component.html',
  styleUrls: ['./zoom-buttons.component.css']
})
export class ZoomButtonsComponent implements OnInit {

  @Input()
  isZoomInDisabled: boolean = false;

  @Input()
  isZoomOutDisabled: boolean = false;

  @Output()
  zoomInClicked: EventEmitter<boolean> = new EventEmitter<boolean>()

  @Output()
  zoomOutClicked: EventEmitter<boolean> = new EventEmitter<boolean>()


  constructor() { }

  ngOnInit(): void {}

  public updateZoomIn(): void {
    this.zoomInClicked.emit(true);
  }

  public updateZoomOut(): void {
    this.zoomOutClicked.emit(true);
  }

}
