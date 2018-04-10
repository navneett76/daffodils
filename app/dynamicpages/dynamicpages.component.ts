import { Component, OnInit, OnDestroy  } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from './users.service';

@Component({
  selector: 'app-dynamicpages',
  templateUrl: './dynamicpages.component.html',
  styleUrls: ['./dynamicpages.component.css']
})


export class DynamicpagesComponent implements OnInit, OnDestroy{

	id: number;
	private userid: any;
	private userData= [];
	private errorMsg: string= 'Please wait! while loading the data!!';

	
	constructor(private route: ActivatedRoute,private router: Router, private UserServiceObj: UsersService) { 
		console.log();
		// debugger;
		// this.router.routeReuseStrategy.shouldReuseRoute= function(){
		// 	return false;
		// }

			
			// this.userid = this.route.params.subscribe(params=>{
			// 	this.id = +params['id']; // + convert string to 'id' as number
			// });
			let urid:number = this.route.snapshot.params["id"];
			this.UserServiceObj.getUserFromList(urid)
				.subscribe((resUser) => {
					if(resUser.length == 0){
						this.errorMsg = 'Please check, user id is not valid!!!!!';
					}else{
						this.userData = resUser;
					}
					console.log(resUser.length);
				}, 
					resError => this.errorMsg = resError )
				;
					
			
		
	}


	ngOnInit() {
		// this.userid = this.route.params.subscribe(params=>{
		// 		this.id = +params['id']; // + convert string to 'id' as number
		// 	});
		// 	this.UserServiceObj.getUserFromList(this.id)
		// 		.subscribe(resUser => {
		// 			this.userData = resUser;
		// 			console.log(resUser);
		// 		}, 
		// 			resError => this.errorMsg = resError )
		// 		;
			
	}


	
	ngOnDestroy() {
		// this.userid.unsubscribe();
	}

}
