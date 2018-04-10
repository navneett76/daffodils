import { Component, OnInit } from '@angular/core';
import { CollectableService } from '../collectable.service';
import { Collectable } from '../collectable-model';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {
	collectables: Collectable[] =  [];
	
	constructor( private collectableser: CollectableService ) { }

	onAddToCollection(item: Collectable){
		this.collectableser.addToCollection(item);
	}
	
	ngOnInit() {
		this.collectables = this.collectableser.getCollectables(); 
	}

}
