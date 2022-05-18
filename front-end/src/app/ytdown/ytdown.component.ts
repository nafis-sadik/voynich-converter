import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ytdown',
  templateUrl: './ytdown.component.html',
  styleUrls: ['./ytdown.component.css']
})
export class YtdownComponent implements OnInit {

  downloadUrl: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
