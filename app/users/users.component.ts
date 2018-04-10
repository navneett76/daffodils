import { Component, OnInit } from '@angular/core';
import { UsersService } from '../dynamicpages/users.service';
// import { CommonModule } from '@angular/core';
import { CustomFilter } from '../filter.pipe';


@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

	users: any = [];
	
	errorMsg: string = 'Please wait! while laoding the page.';
	constructor(private userSer: UsersService) { }

  	ngOnInit() {
  		return this.userSer.getUsersList()
  		.subscribe((userList) =>this.users = userList
  			)
  		;
 	}

 	// searchUser(){
 	// 	this.userSer.getUsers().
		// subscribe(resUser => this.users = resUser, 
		// 		resError => this.errorMsg = resError );
 	// }

}
