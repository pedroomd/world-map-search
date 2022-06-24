import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal-card',
  templateUrl: './personal-card.component.html',
  styleUrls: ['./personal-card.component.css']
})
export class PersonalCardComponent implements OnInit {

  
  public title: string = 'Pedro Diogo';

  public role: string = 'frontend intern';

  public passions: string[] = ["Football", "Running", "Formula 1", "Dogs"];

  public description: string = "Hi! My name is Pedro Diogo and I'm 22 years old. I have taken a Bachelor's degree in Computer Science and currently I'm almost finishing my Master's degree. Personally, I'm a sports addicted, and in a typical day of my life a 20 minute run is always present."

  public email: string = "pedro.m.diogo@tecnico.ulisboa.pt";

  public age: number;
  
  public birthday: Date = new Date('1999-07-21');

  public phone: number = 934469351;

  public residence: string = 'Lisbon';

  constructor() { }

  ngOnInit(): void {
    this.getAge()
    
  }

  private getAge(): void{
    let timeDiff = Math.abs(Date.now() - this.birthday.getTime());
    this.age = Math.floor((timeDiff / (1000 * 3600 * 24))/365.25);
    console.log(this.age)
  }

  public getBirthdayString(): string {
    if (this.birthday.getMonth() < 9){
      return this.birthday.getDate() + '-0' + (this.birthday.getMonth() + 1 )+ '-' + this.birthday.getFullYear();
    }
    else{
      return this.birthday.getDate() + '-' + (this.birthday.getMonth()+ 1 ) + '-' + this.birthday.getFullYear();
    }
      
  }
  

}
