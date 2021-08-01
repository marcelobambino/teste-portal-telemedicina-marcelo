import { Component, OnInit } from '@angular/core';
import { ElementRef } from '@angular/core';
import { AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit, AfterViewInit  {
  constructor(private elementRef: ElementRef) { 
    //do nothing...
  }

  backgroundColor = '#b3e0ff';
  links = ['/past', '/future', '/history'];
  titles = ['Past', 'Future', 'History'];
  myColor = 'primary';
  selectedTitle = '';

  ngOnInit(): void {
    // Lifecycle methods should not be empty  @angular-eslint/no-empty-lifecycle-method
    () => undefined
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
        .body.style.backgroundColor = this.backgroundColor;
  }
}