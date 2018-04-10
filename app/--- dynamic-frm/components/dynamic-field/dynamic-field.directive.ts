import { Directive, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Directive({
  selector: '[dynamicField]',
})
export class DynamicFieldDirective {
  @Input() config;

  @Input() group: FormGroup;
}