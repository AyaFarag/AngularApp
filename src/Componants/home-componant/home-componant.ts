import { CommonModule  } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home-componant',
  imports: [CommonModule],
  templateUrl: './home-componant.html',
  styleUrl: './home-componant.css'
})
export class HomeComponant {

  name: string = "Amr";
  email:string = "a@gmail.com";
  subject: string = "Welcom Home Componant";
  imageURL: string = "test.png";
  id: number = 1;

  skills!: string[] ;

  buttonClicked(){
    console.log("test button clicked");
  }

}
