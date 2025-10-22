import { CommonModule  } from '@angular/common';
import { Component } from '@angular/core';
import { IProduct } from '../../Models/iproduct';

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

  products: IProduct[] = [
    { title: "Laptop" , description: "test out laptop" , price: 100, quantity: 10},
    { title: "Laptop" , description: "test out laptop" , price: 100, quantity: 10},
    { title: "Laptop" , description: "test out laptop" , price: 100, quantity: 10},
    { title: "Laptop" , description: "test out laptop" , price: 100, quantity: 10},
  ];

  productDetails : IProduct = { title:" " , description: "" , price: 100 , quantity: 20}; 


  productTitle: string = "Labtop";
  

  buttonClicked(){
    console.log("test button clicked");
  }

}
