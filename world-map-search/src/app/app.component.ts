import { Component, OnInit } from '@angular/core';
import  {trigger, transition, useAnimation}  from  "@angular/animations";
import  {rotateCubeToLeft, rotateCubeToRight}  from  "ngx-router-animations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:  [
    trigger('rotateCubeToLeft',  [ transition('home => aboutme', useAnimation(rotateCubeToLeft))]),
    trigger('rotateCubeToRight',  [ transition('aboutme => home', useAnimation(rotateCubeToRight))])
  ]
})
export class AppComponent {

  title = 'world-map-search';
  
  constructor(){}

  ngOnInit(): void {
  }

  getState(outlet: any)  {
		return outlet.activatedRouteData.state;
	}

  
  
}