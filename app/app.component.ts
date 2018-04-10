import { Component } from '@angular/core';
import {Http, Response} from '@angular/http'

// import { CustomerService} from './customer.service';  

@Component({
	selector: 'my-app',
	templateUrl: './app.component.html',
	styleUrls: ['./login-component.css'],
	providers: [] ,
})
export   class   AppComponent  {
	
	value: string = ""; 
	title:string = "Angular 2 Application"; 
	userdata: Array<{ id:number, firstname:string}> = [];
	

	constructor() { 
		var currentUser = localStorage.getItem('currentUser');
		if((typeof currentUser !== 'undefined') && ( currentUser !== 'null')){
            this.userdata = JSON.parse(currentUser);
        }
        // console.log(Object.keys(this.userdata).length);
        console.log( currentUser);
        
	}  

}

