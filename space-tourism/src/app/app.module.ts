import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DestinationComponent } from './destination/destination.component';
import { CrewComponent } from './crew/crew.component';
import { TechnologyComponent } from './technology/technology.component';
import {CarouselModule} from '@coreui/angular'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NavigationComponent } from './navigation/navigation.component';
import { NavModule } from '@coreui/angular';
import { NavbarModule } from '@coreui/angular';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DestinationComponent,
    CrewComponent,
    TechnologyComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule, 
    NavModule,
    NavbarModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
