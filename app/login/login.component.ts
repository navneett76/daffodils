import { Component, OnInit } from '@angular/core';
import { LoginServices } from './login.services'
// import { FilterPipe } from '../filter.pipe';

@Component({
	selector: 'login',
	templateUrl: './login.html',
	styleUrls: ['loginreg.css']
})

export class loginComponent implements OnInit{
	//
	
	data = <any>{};
	users= [];
	errorMsg : string; 
	isLoading = false;
	constructor(private loginServices: LoginServices) { }
	
	ngOnInit(){
		// console.log("Testing user fraze");

		this.loginServices.getUsers().
		subscribe(resUser => this.users = resUser, 
				resError => this.errorMsg = resError );


	}
	
	formSubmit (){
		// var userName  = this.data.username; 
		console.log(this.data);
		// var chkUser = this.users.filter(function(uname){ return uname.username == userName });
		// console.log(chkUser[0]["password"]); 
		// if(	 this.data.password == chkUser[0]["password"]){
		// 	alert("Hellow Admin!!!!!");
		// }else{
		// 	alert("Sorry this is wrong value entered in login form.");
		// }
	}
	
}