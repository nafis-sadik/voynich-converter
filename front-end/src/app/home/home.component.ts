import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  bookmark(){
    alert('Press Ctrl+D to bookmark this page.');
  }

  ngOnInit(): void {
  }

}
