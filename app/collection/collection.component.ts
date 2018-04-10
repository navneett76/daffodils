import { Component, OnInit } from '@angular/core';
import { CollectableService } from '../collectable.service';
import { Collectable } from '../collectable-model';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

	
	collectableItem: Collectable[] = [];
	constructor(private collectableservice: CollectableService) { }

	ngOnInit() {
		this.collectableItem = this.collectableservice.getCollection();
	}
  
	removeFromCollection(item: Collectable){
		this.collectableservice.removeCollection(item);
	}

}
