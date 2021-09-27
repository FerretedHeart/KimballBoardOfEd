import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css']
})
export class CampaignComponent implements OnInit {

  value!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
