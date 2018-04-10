import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class CustomFilter implements PipeTransform {

	transform(users: any, search: string): any {
	
		if(search === undefined) return users;
		
		return users.filter(function(user){
			// console.log(search);
			return user.Userfirstname.toLowerCase().includes(search.toLowerCase);
		});
	}

}
