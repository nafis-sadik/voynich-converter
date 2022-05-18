import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Halwa Box';

  constructor() {}

  bookmark(){
    alert('Press Ctrl+D to bookmark this page.');
  }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void{
    let viewport = document.getElementById('viewport');
    let topNav = document.getElementById('top-nav');
    if(viewport != null && topNav != null){
      console.log(viewport.offsetHeight);
      viewport.style.height = (window.innerHeight - topNav.offsetHeight).toString() + 'px';
      console.log(viewport.offsetHeight);
    }
  }
}
