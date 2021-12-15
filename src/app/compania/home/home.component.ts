import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public optionSelectedCountry : string='NA';
	public optionSelectedTitle : string='NA';

  constructor() { }

  ngOnInit(): void {
  }

  search(){
    window.open('http://localhost:8095/'+this.optionSelectedCountry+'/'+this.optionSelectedTitle, '_blank');
  }
}
