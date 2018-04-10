import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import * as Rx from 'rxjs';

// import "rxjs/add/operator/map"; 
// import "rxjs/add/operator/catch"; 
// import "rxjs/add/observable/throw"; 

let contacts = [
  { id: 1, name: 'Pascal Precht', twitter: '@PascalPrecht' },
  { id: 2, name: 'Christoph Burgdorf', twitter: '@cburgdorf' },
  { id: 3, name: 'Thomas Burleson', twitter: '@thomasburleson' },
  { id: 4, name: 'Dominic Elm', twitter: '@elmd_' }
];


@Injectable()
export class UsersService {

	private _url: string = "./assets/userlist.json";
	_err: any;
	
	userData: any;
	
	constructor(private _http: Http) { 
		
	}
	
	getUserFromList(userId){
		// console.log(userId); this.users.filter(function(uname){ return uname.Userfirstname == userName });
		return this._http.get(this._url)
			.map((res: Response)=>res.json().filter(function(userData){ return userData.id == userId }))
			.catch(this._errorHandler)
	}
//.filter(function(userData){ return userData.id == userId })
	_errorHandler(_err: Response){
		return Observable.throw(this._err || "Server Error!!");
	}


	getUsersList() {
	    return this._http.get(this._url)
			.map((res: Response)=>res.json())
			.catch(this._usererrorHandler)
	}

	// getUsersList(): Observable<any> {
	//     return this._http.get('http://localhost/laravel/blog/users')
 //        .map((response: Response)=>{
 //        	return response.json().users;
 //        })
 //        .catch(this._usererrorHandler);
	// }
	_usererrorHandler(_err: Response){
		return Observable.throw(this._err || "Server Error!!");
	}

}
