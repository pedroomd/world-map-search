import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { CountryService } from './country.service';
import { BrowserAnimationsModule } from 
    '@angular/platform-browser/animations';
import {MatTooltipModule} from '@angular/material/tooltip';
import { WorldMapComponent } from './world-map/world-map.component';
import { MatDialogModule } from '@angular/material/dialog';
import { PopUpComponent } from './pop-up/pop-up.component';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ZoomButtonsComponent } from './zoom-buttons/zoom-buttons.component';
import { LogoComponent } from './logo/logo.component';
import { CreatedByComponent } from './created-by/created-by.component';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { HomeComponent } from './pages/home/home.component';
import { PersonalCardComponent } from './personal-card/personal-card.component';


@NgModule({
  declarations: [
    AppComponent,
    WorldMapComponent,
    PopUpComponent,
    ZoomButtonsComponent,
    LogoComponent,
    CreatedByComponent,
    AboutMeComponent,
    HomeComponent,
    PersonalCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTooltipModule,
    MatDialogModule,
    AngularSvgIconModule.forRoot()
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
