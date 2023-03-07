import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrewComponent } from './crew/crew.component';
import { DestinationsComponent } from './destinations/destinations.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TechnologyComponent } from './technology/technology.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'destination', component: DestinationsComponent},
  {path: 'technology', component: TechnologyComponent},
  {path: 'crew', component: CrewComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
