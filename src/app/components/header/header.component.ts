import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
   constructor() {
   }

  title?: string = "Launches List";
  ngOnInit(): void {  
    // Lifecycle methods should not be empty  @angular-eslint/no-empty-lifecycle-method
    () => undefined
  }
}