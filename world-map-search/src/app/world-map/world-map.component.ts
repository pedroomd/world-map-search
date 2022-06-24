import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CountryService } from '../country.service';
import { PopUpComponent } from '../pop-up/pop-up.component';
import { Country } from 'src/types/country';
import * as countries_id_dict from 'src/data/countries_id.json';

@Component({
  selector: 'app-world-map',
  templateUrl: './world-map.component.html',
  styleUrls: ['./world-map.component.css']
})
export class WorldMapComponent implements OnInit {

  public name: string = "";
  private countrySelected?: Country;
  private countries_id: { [key: string]: any } = countries_id_dict;
  

  constructor(private countryService: CountryService, private dialogRef: MatDialog) {}

  ngOnInit(): void {}

  public countryInfo(event: any): void {
    let countryName;
    
    if (event.target.attributes.name) {
      countryName = event.target.attributes.name.value;
    }
    else{
      let countryWords = [...event.target.classList].slice(1); 
      countryName = countryWords.join(" ");
    }

    let countryId: string = this.countries_id[countryName];
    console.log(countryId)

    this.countryService.getCountry(countryId)
      .subscribe((result: any) => {
        let country = result?.data?.country;
        console.log(country)
        
        this.countrySelected = <Country> {
          id: countryId.toLowerCase(),
          name: country.name,
          capital: country.capital,
          currency: country.currency,
          emoji: country.emoji,
          phone: country.phone, 
          continent: country.continent.name
        }

        console.log(this.countrySelected);
        this.openPopUp();
        
      })
  };

  public setCountryName(event: any): void{
    // or get the name by path name or by the name that is in the class

    if (event.target.attributes.name) {
      this.name = event.target.attributes.name.value;
    }
    else{
      let countryWords = [...event.target.classList].slice(1); //to prevent cases like class="United States"
      this.name = countryWords.join(" ");
    }
  }

  private openPopUp(): void{
    this.dialogRef.open(PopUpComponent, {
      data: { 
        countrySelected: this.countrySelected
      },
    });
  }



}
