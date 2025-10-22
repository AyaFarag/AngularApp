import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IExperience } from '../../../../Models/iexperience';

@Component({
  selector: 'app-experience-componant',
  imports: [CommonModule],
  templateUrl: './experience-componant.html',
  styleUrl: './experience-componant.css'
})
export class ExperienceComponant {
  title: string = 'Work Experience';
  experiences: IExperience[] = [
    { company: 'TechSoft', role: 'Frontend Developer', years: 2 },
    { company: 'SmartCode', role: 'Full Stack Developer', years: 3 }
  ];

}
