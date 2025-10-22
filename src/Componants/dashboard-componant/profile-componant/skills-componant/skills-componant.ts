import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ISkill } from '../../../../Models/iskill';

@Component({
  selector: 'app-skills-componant',
  imports: [CommonModule],
  templateUrl: './skills-componant.html',
  styleUrl: './skills-componant.css'
})
export class SkillsComponant {


  title: string = 'My Skills';

  mySkills!: string[];

  skills: ISkill[] = [
    { name: 'Angular', level: 'Advanced' },
    { name: 'TypeScript', level: 'Intermediate' },
    { name: 'HTML & CSS', level: 'Expert' }
  ];

}
