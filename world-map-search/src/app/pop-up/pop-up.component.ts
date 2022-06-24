import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Country } from 'src/types/country';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.css']
})
export class PopUpComponent implements OnInit {
  
  country: Country;

  constructor(@Inject(MAT_DIALOG_DATA) public data: {countrySelected: Country}) {  //specify the type of the data
    this.country = data.countrySelected;
  }

  ngOnInit(): void {}

}
