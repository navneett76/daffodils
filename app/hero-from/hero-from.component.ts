import { Component, OnInit } from '@angular/core';
import { Reactivefrm }    from '../herofrm/reactivefrm';
 
@Component({
  selector: 'app-hero-from',
  templateUrl: './hero-from.component.html',
  styleUrls: ['./hero-from.component.css']
})
export class HeroFromComponent implements OnInit {

	constructor() { }

	powers = ['Really Smart', 'Super Flexible','Super Hot', 'Weather Changer'];

	model = new Reactivefrm(18, 'Dr IQ', this.powers[0], 'Chuck Overstreet');

	submitted = false;

	onSubmit() { this.submitted = true; }

	// TODO: Remove this when we're done
	get diagnostic() { return JSON.stringify(this.model); }

	ngOnInit() {}

}
