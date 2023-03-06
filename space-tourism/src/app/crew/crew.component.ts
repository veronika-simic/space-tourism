import { Component } from '@angular/core';
import { CrewMember } from 'src/models/crew-member';
import { CREW } from './mock-crew';
@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.css'],
})
export class CrewComponent {
  crewMembers = CREW;
}
