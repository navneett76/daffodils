// import {Injectable} from '@angular/core';
// @Injectable()
export class ExperimentsService {
	private message = 'Hello ExperimentsService Message';
	getMessage(): string {
		return this.message;
	};
	setMessage(newMessage: string): void {
		this.message = newMessage;
	};
}