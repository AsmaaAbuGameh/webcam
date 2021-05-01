import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  
  email: string = 'abc@gmial.com';
  description: string = '';
  file: any;

  constructor(public imageSrvice: ImageService, public router: Router){}
  
  ngOnInit(): void {
  }

  send(){
    fetch('https://localhost:44336/weatherforecast',
     {
       method: "POST",
       body: JSON.stringify({text: this.description, email: this.email, file: this.imageSrvice.image.imageAsDataUrl})    
    }).then(res => res.json()).then(text => console.log(text))

    //  this.router.navigate(['/']);
    
  }

}
