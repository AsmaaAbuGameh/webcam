import { Injectable } from '@angular/core';
import { WebcamImage } from 'ngx-webcam';

@Injectable({
  providedIn: 'root'
})
export class ImageService {
  
  image: WebcamImage | any;
  
  constructor() { }
}
