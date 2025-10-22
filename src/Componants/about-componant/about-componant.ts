import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-about-componant',
  imports: [CommonModule],
  templateUrl: './about-componant.html',
  styleUrl: './about-componant.css'
})
export class AboutComponant {
  name: string = 'Aya Farag';
  description: string = 'Teaching and leading Arab developers into professional software careers.';
  platform: string = 'Denizey Platform';
}
