import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
// import { DynamicFormComponent } from './containers/dynamic-form/dynamic-form.component';
// import { FormButtonComponent } from './components/form-button/form-button.component';
// import { FormInputComponent } from './components/form-input/form-input.component';
// import { FormSelectComponent } from './components/form-select/form-select.component';


@NgModule({
	imports: [CommonModule, ReactiveFormsModule],
	declarations: [
		/* FormButtonComponent,
		FormInputComponent,
		FormSelectComponent */
	],
	/* exports: [DynamicFormComponent], */
})
export class DynamicFormModule {}