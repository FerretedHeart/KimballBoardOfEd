import { Component, OnInit } from '@angular/core';
import { faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';

@Component({
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  faEnvelopeOpen = faEnvelopeOpen;

  constructor() { }

  ngOnInit(): void {
  }

}
