import { Component, OnInit } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';
import { Subject, Observable } from 'rxjs';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-therid-page',
  templateUrl: './therid-page.component.html',
  styleUrls: ['./therid-page.component.css']
})
export class TheridPageComponent {

  public webcamImage : WebcamImage | any;
  private trigger : Subject<void> =new Subject<void>();

  constructor(public imageSrvice: ImageService){}

  triggerSnapshot(): void{
    this.trigger.next();
  }

  handleImage(webcamImage : WebcamImage ):void{
    console.info('recived webcam image', webcamImage);
    this.imageSrvice.image = webcamImage;
    this.webcamImage = webcamImage;
  }

  public get triggerObservable(): Observable<void>{
    return this.trigger.asObservable();
  }

}
