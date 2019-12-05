import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { ToDo } from './interfaces/to-do';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  constructor(private elementRef:ElementRef)
  {

  }
  ngAfterViewInit(){
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor="lightsteelblue";
  }
  
}

