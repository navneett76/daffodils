import {Injectable} from '@angular/core';
@Injectable()
export class StateService {
	private message = 'Hello Message';
	getMessage(): string {
		return this.message;
	};
	setMessage(newMessage: string): void {
		this.message = newMessage;
	};
}