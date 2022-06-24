import { Component,  ViewChild, ElementRef, Renderer2, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  scaleMap: number = 1;
  finalX: number = 0;
  finalY: number = 0;
  initialX: number = 0;
  initialY: number = 0;
  rbX: number = 0;
  lbX: number = 0;
  tbY: number = 0;
  dbY: number = 0;
  screenHeight: number;
  screenWidth: number;


  @ViewChild('mapDiv', {static: true}) 
  mapDiv: ElementRef;

  private unlistenMouseMove: () => void;
  private unlistenMouseUp: () => void;
  private unlistenMouseDown: () => void;

  constructor(private renderer: Renderer2) {
    this.getScreenSize();
  }
  
  ngOnInit() {

    const draggableEl = this.mapDiv.nativeElement;
    this.unlistenMouseDown = this.renderer.listen(draggableEl, "mousedown", event => {
      
      this.rbX = 2000 - event.offsetX;
      this.lbX = event.offsetX - event.clientX/this.scaleMap; //use the scale in left bondary

      this.dbY = 950 - event.offsetY;
      this.tbY = event.offsetY - event.clientY/this.scaleMap;

      this.initialX = this.screenWidth - event.clientX;
      this.initialY = this.screenHeight - event.clientY;
      console.log(this.rbX*this.scaleMap - this.initialX, this.lbX, event.clientX, event.offsetX)
      let lastX = event.clientX;
      let lastY = event.clientY;
      let sumX = 0;
      let sumY = 0;

      this.unlistenMouseMove = this.renderer.listen("document", "mousemove", event2 => {
        this.renderer.setStyle(this.mapDiv.nativeElement, "position", "absolute")
        let vectorX = event2.clientX - lastX;
        let vectorY = event2.clientY - lastY;
        sumX = sumX + vectorX;
        sumY = sumY + vectorY;
        console.log("sss", -sumY, this.rbX - this.initialX, this.lbX )
        if ((-sumX)  < (this.rbX*this.scaleMap - this.initialX) && sumX < 0){ 
          this.finalX = this.finalX + vectorX;
          this.renderer.setStyle(this.mapDiv.nativeElement, "left", this.finalX.toString() + "px")
        }
        else if ((sumX) < this.lbX && sumX > 0){ 
          this.finalX = this.finalX + vectorX;
          this.renderer.setStyle(this.mapDiv.nativeElement, "left", this.finalX.toString() + "px")
        }
        
        if ((-sumY) < (this.dbY*this.scaleMap - this.initialY) && sumY < 0){

          this.finalY = this.finalY + vectorY;
          this.renderer.setStyle(this.mapDiv.nativeElement, "top", this.finalY.toString() + "px")
        }
        else if ((sumY) < this.tbY && sumY > 0){
          this.finalY = this.finalY + vectorY;
          this.renderer.setStyle(this.mapDiv.nativeElement, "top", this.finalY.toString() + "px")
        }

        lastX = event2.clientX;
        lastY = event2.clientY;

      });

      this.unlistenMouseUp = this.renderer.listen("document", "mouseup", (event3) => {

        this.unlistenMouseMove();
        this.unlistenMouseUp();
      });
      
    });
    
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
        console.log(this.screenHeight, this.screenWidth);
  }

  isZoomInDisabled(): boolean {
    return this.scaleMap == 3;
  }

  isZoomOutDisabled(): boolean {
    return this.scaleMap == 1;
  }
  
  zoomIn(zoomInClicked: boolean): void {
    if (zoomInClicked) {
      this.scaleMap += 0.25;
      this.renderer.setStyle(this.mapDiv.nativeElement, "transform", "scale(" + this.scaleMap.toString() + ')')
    }
 
  }

  zoomOut(zoomOutClicked: boolean): void {

    if (zoomOutClicked) {
      let timesZoomed = (this.scaleMap - 1) * 4;
      this.scaleMap -= 0.25;
      this.finalX -= this.finalX / timesZoomed
      this.finalY -= this.finalY / timesZoomed

      this.renderer.setStyle(this.mapDiv.nativeElement, "transform", "scale(" + this.scaleMap.toString() + ')')
      this.renderer.setStyle(this.mapDiv.nativeElement, "left", this.finalX + 'px')
      this.renderer.setStyle(this.mapDiv.nativeElement, "top", this.finalY + 'px')
      
    }
  }

}
