import { Collectable } from './collectable-model';

export class CollectableService {
	
	// console.log(Collectable);
	
	private Collectables: Collectable[] = [
		{discription: "I am Navneet Tiwari", type: "Name"}, 
		{discription: "I completed Btech with computer science.", type: "Education"}, 
		{discription: "Now I am working in MNC", type: "Working experience"}, 
		{discription: "I have 6+ year of experience.", type: "Total Experience"} 
	];
	
	private collection: Collectable[] = []; 
	
	getCollectables(){
		return this.Collectables;  
	}
	
	getCollection(){
		return this.collection;
	}
	
	addToCollection(item: Collectable){
		console.log(item); 
		if(this.collection.indexOf(item)!==-1){
			return ;
		}
		this.collection.push(item);
		
	}
	
	removeCollection(item: Collectable){
		// console.log(item ); return;
		this.collection.splice(this.collection.indexOf(item), 1);
	}
	
}

